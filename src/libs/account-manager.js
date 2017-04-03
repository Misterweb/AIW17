import {
    BehaviorSubject,
    Observable
} from "rxjs";

import _ from "lodash"
import tc from "tiny-cookie"
import Account from "@/libs/account"

export default class AccountManager {
    constructor() {
        this.subject = new BehaviorSubject();
        this.account = null;
    }

    load() {
        if (tc.enabled()) {
            let cookie = tc.get('account');
            if (_.isEmpty(cookie) == false) {
                this.account = JSON.parse(cookie);
                this.subject.next(this.account);
                return true;
            }
        }
        return false;
    }

    disconnect() {
        this.load();
        if (tc.enabled()) {
            this.account.isConnected = false;
            this.set(this.account);
        }
    }

    remove() {
        if (tc.enabled()) {
            tc.remove('account');
        }
        this.account = null;
        this.subject.next(this.account);
    }

    get() {
        return this.account;
    }

    set(account) {
        this.account = account;
        this.subject.next(account);

        if (tc.enabled()) {
            tc.set('account', JSON.stringify(account), { expires: '10D' });
        }
    }

    subscribe(listener) {
        return this.subject
            .subscribe(listener,
                (err) => { console.error(`An error occured in Account subject => ${err}`); },
                () => { console.log('Account subject is completed'); })
    }
}