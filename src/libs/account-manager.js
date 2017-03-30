import {
    BehaviorSubject,
    Observable
} from "rxjs";


export default class AccountManager {
    constructor() {
        this.subject = new BehaviorSubject();
        this.account = null;
    }

    set(account) {
        this.account = account;
        this.subject.next(account);
    }

    subscribe(listener) {
        return this.subject
            .subscribe(listener,
                (err) => { console.error(`An error occured in Account subject => ${err}`); },
                () => { console.log('Account subject is completed'); })
    }
}