"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ms_rest_1 = require("ms-rest");
const ms_rest_azure_1 = require("ms-rest-azure");
const operations = require("./operations");
const Models = require("./models");
exports.Models = Models;
const mappers_1 = require("./models/mappers");
const packageName = 'azure-arm-storage';
const packageVersion = '3.0.0-preview';
class StorageManagementClient extends ms_rest_azure_1.AzureServiceClient {
    /**
     * Initializes a new instance of the StorageManagementClient class.
     * @constructor
     *
     * @class
     * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {RequestOptions} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.apiVersion] - Client Api Version.
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials, subscriptionId, baseUri, options) {
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('\'subscriptionId\' cannot be null.');
        }
        if (!options)
            options = {};
        super(credentials, options);
        this.apiVersion = '2017-06-01';
        this.acceptLanguage = 'en-US';
        this.longRunningOperationRetryTimeout = 30;
        this.generateClientRequestId = true;
        this.baseUri = baseUri;
        if (!this.baseUri) {
            this.baseUri = 'https://management.azure.com';
        }
        this.credentials = credentials;
        this.subscriptionId = subscriptionId;
        this.addUserAgentInfo(`${packageName}/${packageVersion}`);
        if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
            this.acceptLanguage = options.acceptLanguage;
        }
        if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
            this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
        }
        if (options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
            this.generateClientRequestId = options.generateClientRequestId;
        }
        this.storageAccounts = new operations.StorageAccounts(this);
        this.serializer = new ms_rest_1.Serializer(mappers_1.Mappers);
    }
}
exports.StorageManagementClient = StorageManagementClient;
//# sourceMappingURL=storageManagementClient.js.map