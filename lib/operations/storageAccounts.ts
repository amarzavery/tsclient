import * as msRest from 'ms-rest';
import { StorageManagementClient } from '../storageManagementClient';
import * as Models from '../models';
import { Mappers } from '../models/mappers';

const WebResource = msRest.WebResource;

export default class StorageAccounts {
  private readonly client: StorageManagementClient;
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  async checkNameAvailabilityWithHttpOperationResponse(name: string, options?: msRest.RequestOptions): Promise<msRest.HttpOperationResponse> {
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
    } catch (error) {
      return Promise.reject(error);
    }
    let accountName: Models.StorageAccountCheckNameAvailabilityParameters = {
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
      let customHeaderOptions = options as msRest.RequestOptions;
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
        let requestModelMapper = Mappers.StorageAccountCheckNameAvailabilityParameters;
        requestModel = client.serializer.serialize(requestModelMapper, accountName, 'accountName');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(accountName, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    let result: Models.CheckNameAvailabilityResult;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = statusCode;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
            if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
            if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
          }
          // if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          //   let resultMapper = new client.models['CloudError']().mapper();
          //   error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          // }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
            `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      if (statusCode === 200) {
        let parsedResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          //result = JSON.parse(responseBody as string);
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.CheckNameAvailabilityResult;
            result = client.serializer.deserialize(resultMapper, parsedResponse, 'result');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  async checkNameAvailabilityWithHttpOperationResponse1(name: string, options?: msRest.RequestOptions): Promise<msRest.HttpOperationResponse> {
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
    } catch (error) {
      return Promise.reject(error);
    }
    let accountName: Models.StorageAccountCheckNameAvailabilityParameters = {
      name: name
    };

    let rp: msRest.RequestPrepareOptions = { method: 'POST' };
    rp.body = accountName;
    rp.serializationMapper = Mappers.StorageAccountCheckNameAvailabilityParameters;
    rp.headers = {};
    rp.headers['Content-Type'] = 'application/json; charset=utf-8';
    rp.disableClientRequestId = !this.client.generateClientRequestId;
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      rp.headers['accept-language'] = this.client.acceptLanguage;
    }
    if (options) {
      let customHeaderOptions = options as msRest.RequestOptions;
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
    }
    let httpRequest = new WebResource().prepare(rp);
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    let result: Models.CheckNameAvailabilityResult;
    try {
      operationRes = await client.sendRequest(rp);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = statusCode;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
            if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
            if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
          }
          // if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          //   let resultMapper = new client.models['CloudError']().mapper();
          //   error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          // }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
            `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      if (statusCode === 200) {
        let parsedResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          //result = JSON.parse(responseBody as string);
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.CheckNameAvailabilityResult;
            result = client.serializer.deserialize(resultMapper, parsedResponse, 'result');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  checkNameAvailability(name: string): Promise<Models.CheckNameAvailabilityResult>;
  checkNameAvailability(name: string, options: msRest.RequestOptions): Promise<Models.CheckNameAvailabilityResult>;
  checkNameAvailability(name: string, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  checkNameAvailability(name: string, options: msRest.RequestOptions, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  checkNameAvailability(name: string, options?: msRest.RequestOptions, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CheckNameAvailabilityResult>;
    if (!callback) {
      return this.checkNameAvailabilityWithHttpOperationResponse(name, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as Models.CheckNameAvailabilityResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.checkNameAvailabilityWithHttpOperationResponse(name, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as Models.CheckNameAvailabilityResult;
        return cb(err, result, data.request, data.response);
      });
    }
  }

}