import _ from "lodash";
import { JitsiMeetExternalAPI } from "../jitsi/external_api.min";

export default class Call {
    constructor(config) {
        config = config || {};

        this.api = null;
        this.events = [];

        this.domain = config.domain || "visionbasicn.arkadin.com";
        this.roomName = config.roomName || null;
        this.width = config.width || '100%';
        this.height = config.width || '100%';
        this.element = config.element || document.querySelector("#meet");
    }

    start() {
        if (_.isEmpty(this.roomName)) {
            console.error('No room name has been given.');
            return;
        }

        if (_.isEmpty(this.api) === false) {
            console.error("Can't start, call already online.");
            return;
        }

        this.api = new JitsiMeetExternalAPI(this.domain, this.roomName, this.width, this.height, this.element, null, null, false);
    }

    dispose() {
        console.log('Disposing call object');

        this.unmountListeners();
        if (this.api) this.api.dispose();
    }

    addEventListener(name, listener) {
        if (_.isEmpty(this.api)) return null;
        this.events.push(name);

        return this.api.addEventListener(name, listener);
    }

    addEventListeners(listeners) {
        if (_.isEmpty(this.api)) return null;
        this.events.concat(Object.keys(listeners));

        return this.api.addEventListeners(listeners);
    }

    unmountListeners() {
        if (this.api === null) return;
        console.log(`Unmounting events ${this.events}`);
        this.api.removeEventListeners(this.events);
    }
}