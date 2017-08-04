"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest");
const mappers_1 = require("../models/mappers");
const WebResource = msRest.WebResource;
class StorageAccounts {
    constructor(client) {
        this.client = client;
    }
    checkNameAvailabilityWithHttpOperationResponse(name, options) {
        return __awaiter(this, void 0, void 0, function* () {
            /* jshint validthis: true */
            let client = this.client;
            // Validate
            try {
                if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                    throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                }
                if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
                    throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
                }
                if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
                    throw new Error('name cannot be null or undefined and it must be of type string.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            let accountName = {
                name: name
            };
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/Microsoft.Storage/checkNameAvailability';
            requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
            let queryParameters = [];
            queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
            if (queryParameters.length > 0) {
                requestUrl += '?' + queryParameters.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'POST';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options) {
                let customHeaderOptions = options;
                for (let headerName in customHeaderOptions) {
                    if (customHeaderOptions.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = customHeaderOptions[headerName];
                    }
                }
            }
            // Serialize Request
            let requestContent = null;
            let requestModel = null;
            try {
                if (accountName !== null && accountName !== undefined) {
                    let requestModelMapper = mappers_1.Mappers.StorageAccountCheckNameAvailabilityParameters;
                    requestModel = client.serializer.serialize(requestModelMapper, accountName, 'accountName');
                    requestContent = JSON.stringify(requestModel);
                }
            }
            catch (error) {
                let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
                    `payload - ${JSON.stringify(accountName, null, 2)}.`);
                return Promise.reject(serializationError);
            }
            httpRequest.body = requestContent;
            // Send Request
            let operationRes;
            let result;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = statusCode;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            if (parsedErrorResponse.error)
                                parsedErrorResponse = parsedErrorResponse.error;
                            if (parsedErrorResponse.code)
                                error.code = parsedErrorResponse.code;
                            if (parsedErrorResponse.message)
                                error.message = parsedErrorResponse.message;
                        }
                        // if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                        //   let resultMapper = new client.models['CloudError']().mapper();
                        //   error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        // }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        //result = JSON.parse(responseBody as string);
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = mappers_1.Mappers.CheckNameAvailabilityResult;
                            result = client.serializer.deserialize(resultMapper, parsedResponse, 'result');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    checkNameAvailabilityWithHttpOperationResponse1(name, options) {
        return __awaiter(this, void 0, void 0, function* () {
            /* jshint validthis: true */
            let client = this.client;
            // Validate
            try {
                if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                    throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                }
                if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
                    throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
                }
                if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
                    throw new Error('name cannot be null or undefined and it must be of type string.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            let accountName = {
                name: name
            };
            let rp = { method: 'POST' };
            rp.body = accountName;
            rp.serializationMapper = mappers_1.Mappers.StorageAccountCheckNameAvailabilityParameters;
            rp.headers = {};
            rp.headers['Content-Type'] = 'application/json; charset=utf-8';
            rp.disableClientRequestId = !this.client.generateClientRequestId;
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                rp.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options) {
                let customHeaderOptions = options;
                for (let headerName in customHeaderOptions) {
                    if (customHeaderOptions.hasOwnProperty(headerName)) {
                        rp.headers[headerName] = customHeaderOptions[headerName];
                    }
                }
            }
            rp.baseUrl = this.client.baseUri;
            rp.pathTemplate = 'subscriptions/{subscriptionId}/providers/Microsoft.Storage/checkNameAvailability';
            rp.pathParameters = {
                'subscriptionId': this.client.subscriptionId
            };
            rp.queryParameters = {
                'api-version': this.client.apiVersion
            };
            let httpRequest = new WebResource().prepare(rp);
            // Send Request
            let operationRes;
            let result;
            try {
                operationRes = yield client.sendRequest(rp);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = statusCode;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            if (parsedErrorResponse.error)
                                parsedErrorResponse = parsedErrorResponse.error;
                            if (parsedErrorResponse.code)
                                error.code = parsedErrorResponse.code;
                            if (parsedErrorResponse.message)
                                error.message = parsedErrorResponse.message;
                        }
                        // if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                        //   let resultMapper = new client.models['CloudError']().mapper();
                        //   error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        // }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        //result = JSON.parse(responseBody as string);
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = mappers_1.Mappers.CheckNameAvailabilityResult;
                            result = client.serializer.deserialize(resultMapper, parsedResponse, 'result');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    checkNameAvailability(name, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.checkNameAvailabilityWithHttpOperationResponse(name, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.checkNameAvailabilityWithHttpOperationResponse(name, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
exports.default = StorageAccounts;
//# sourceMappingURL=storageAccounts.js.map