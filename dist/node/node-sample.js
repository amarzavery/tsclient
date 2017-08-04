"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storageManagementClient_1 = require("./lib/storageManagementClient");
const msRest = require("ms-rest");
const subscriptionId = 'sub_id';
const token = 'token';
const creds = new msRest.TokenCredentials(token);
const client = new storageManagementClient_1.StorageManagementClient(creds, subscriptionId);
client.storageAccounts.checkNameAvailability("testac", function (err, result, req, res) {
    if (err) {
        console.log(err);
    }
    console.log(result);
    console.log(req);
    console.log(res);
});
//# sourceMappingURL=node-sample.js.map