import _ from "lodash";

export default class Account {
    constructor(config) {
        config = config || {};

        this.name = config.name || "John Doe";
        this.email = config.email || "john@doe.com";
        this.avatarUrl = config.avatarUrl || null;
        this.endDate = config.endDate || null; // unlimited
    }
}