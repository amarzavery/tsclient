import { ServiceClientCredentials, Serializer } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as operations from './operations';
import * as Models from './models';
declare class StorageManagementClient extends AzureServiceClient {
    credentials: ServiceClientCredentials;
    subscriptionId: string;
    baseUri: string;
    acceptLanguage: string;
    longRunningOperationRetryTimeout: number;
    generateClientRequestId: boolean;
    readonly apiVersion: string;
    readonly storageAccounts: operations.StorageAccounts;
    readonly serializer: Serializer;
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
    constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);
}
export { StorageManagementClient, Models };
