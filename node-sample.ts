
import { StorageManagementClient } from './lib/storageManagementClient';
import * as msRest from 'ms-rest';

const subscriptionId = 'sub_id';
const token = 'token';
const creds = new msRest.TokenCredentials(token);
const client = new StorageManagementClient(creds, subscriptionId);

client.storageAccounts.checkNameAvailability("testac", function (err: any, result: any, req: any, res: any) {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log(req);
  console.log(res);
});