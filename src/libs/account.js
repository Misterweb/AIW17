import _ from "lodash";

export default class Account {
    constructor(config) {
        config = config || {};

        this.lastname = config.lastname || "Doe";
        this.firstname = config.firstname || "John";
        this.email = config.email || "john@doe.com";
        this.avatarUrl = config.avatarUrl || null;
        this.endDate = config.endDate || null; // unlimited
        this.company = config.company || "";
        this.avatarImage = config.avatarImage || null;
        this.password = config.password || null;
        this.isConnected = config.isConnected || false;
    }
}