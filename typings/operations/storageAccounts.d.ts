import * as msRest from 'ms-rest';
import { StorageManagementClient } from '../storageManagementClient';
import * as Models from '../models';
export default class StorageAccounts {
    private readonly client;
    constructor(client: StorageManagementClient);
    checkNameAvailabilityWithHttpOperationResponse(name: string, options?: msRest.RequestOptions): Promise<msRest.HttpOperationResponse>;
    checkNameAvailabilityWithHttpOperationResponse1(name: string, options?: msRest.RequestOptions): Promise<msRest.HttpOperationResponse>;
    checkNameAvailability(name: string): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(name: string, options: msRest.RequestOptions): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(name: string, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
    checkNameAvailability(name: string, options: msRest.RequestOptions, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
}
