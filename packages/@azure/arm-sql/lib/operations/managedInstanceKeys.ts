/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/managedInstanceKeysMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedInstanceKeys. */
export class ManagedInstanceKeys {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedInstanceKeys.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of managed instance keys.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceKeysListByInstanceResponse>
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: Models.ManagedInstanceKeysListByInstanceOptionalParams): Promise<Models.ManagedInstanceKeysListByInstanceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options: Models.ManagedInstanceKeysListByInstanceOptionalParams, callback: msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>): void;
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: Models.ManagedInstanceKeysListByInstanceOptionalParams | msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>): Promise<Models.ManagedInstanceKeysListByInstanceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      listByInstanceOperationSpec,
      callback) as Promise<Models.ManagedInstanceKeysListByInstanceResponse>;
  }

  /**
   * Gets a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceKeysGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceKeysGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, keyName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceKey>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, keyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceKey>): void;
  get(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceKey>, callback?: msRest.ServiceCallback<Models.ManagedInstanceKey>): Promise<Models.ManagedInstanceKeysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        keyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedInstanceKeysGetResponse>;
  }

  /**
   * Creates or updates a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be operated on (updated or created).
   * @param parameters The requested managed instance key resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceKeysCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, keyName: string, parameters: Models.ManagedInstanceKey, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceKeysCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedInstanceName,keyName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedInstanceKeysCreateOrUpdateResponse>;
  }

  /**
   * Deletes the managed instance key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,managedInstanceName,keyName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be operated on (updated or created).
   * @param parameters The requested managed instance key resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, keyName: string, parameters: Models.ManagedInstanceKey, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        keyName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the managed instance key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        keyName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of managed instance keys.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceKeysListByInstanceNextResponse>
   */
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceKeysListByInstanceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>): void;
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceKeyListResult>): Promise<Models.ManagedInstanceKeysListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInstanceNextOperationSpec,
      callback) as Promise<Models.ManagedInstanceKeysListByInstanceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByInstanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys/{keyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.keyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys/{keyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.keyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedInstanceKey,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceKey
    },
    201: {
      bodyMapper: Mappers.ManagedInstanceKey
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys/{keyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.keyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByInstanceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
