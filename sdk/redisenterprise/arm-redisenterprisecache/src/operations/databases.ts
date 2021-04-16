/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/databasesMappers";
import * as Parameters from "../models/parameters";
import { RedisEnterpriseManagementClientContext } from "../redisEnterpriseManagementClientContext";

/** Class representing a Databases. */
export class Databases {
  private readonly client: RedisEnterpriseManagementClientContext;

  /**
   * Create a Databases.
   * @param {RedisEnterpriseManagementClientContext} client Reference to the service client.
   */
  constructor(client: RedisEnterpriseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all databases in the specified RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesListByClusterResponse>
   */
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesListByClusterResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.DatabaseList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseList>): void;
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseList>, callback?: msRest.ServiceCallback<Models.DatabaseList>): Promise<Models.DatabasesListByClusterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listByClusterOperationSpec,
      callback) as Promise<Models.DatabasesListByClusterResponse>;
  }

  /**
   * Creates a database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param parameters Parameters supplied to the create or update database operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesCreateResponse>
   */
  create(resourceGroupName: string, clusterName: string, databaseName: string, parameters: Models.Database, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesCreateResponse> {
    return this.beginCreate(resourceGroupName,clusterName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DatabasesCreateResponse>;
  }

  /**
   * Updates a database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param parameters Parameters supplied to the create or update database operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, databaseName: string, parameters: Models.DatabaseUpdate, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,clusterName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DatabasesUpdateResponse>;
  }

  /**
   * Gets information about a database in a RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, databaseName: string, callback: msRest.ServiceCallback<Models.Database>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Database>): void;
  get(resourceGroupName: string, clusterName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Database>, callback?: msRest.ServiceCallback<Models.Database>): Promise<Models.DatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DatabasesGetResponse>;
  }

  /**
   * Deletes a single database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,databaseName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Retrieves the access keys for the RedisEnterprise database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesListKeysResponse>
   */
  listKeys(resourceGroupName: string, clusterName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesListKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, clusterName: string, databaseName: string, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, clusterName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  listKeys(resourceGroupName: string, clusterName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessKeys>, callback?: msRest.ServiceCallback<Models.AccessKeys>): Promise<Models.DatabasesListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.DatabasesListKeysResponse>;
  }

  /**
   * Regenerates the RedisEnterprise database's access keys.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param keyType Which access key to regenerate. Possible values include: 'Primary', 'Secondary'
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, clusterName: string, databaseName: string, keyType: Models.AccessKeyType, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesRegenerateKeyResponse> {
    return this.beginRegenerateKey(resourceGroupName,clusterName,databaseName,keyType,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DatabasesRegenerateKeyResponse>;
  }

  /**
   * Imports a database file to target database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param sasUri SAS URI for the target blob to import from
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  importMethod(resourceGroupName: string, clusterName: string, databaseName: string, sasUri: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginImportMethod(resourceGroupName,clusterName,databaseName,sasUri,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Exports a database file from target database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param sasUri SAS URI for the target directory to export to
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  exportMethod(resourceGroupName: string, clusterName: string, databaseName: string, sasUri: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginExportMethod(resourceGroupName,clusterName,databaseName,sasUri,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param parameters Parameters supplied to the create or update database operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, clusterName: string, databaseName: string, parameters: Models.Database, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates a database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param parameters Parameters supplied to the create or update database operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterName: string, databaseName: string, parameters: Models.DatabaseUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a single database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Regenerates the RedisEnterprise database's access keys.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param keyType Which access key to regenerate. Possible values include: 'Primary', 'Secondary'
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRegenerateKey(resourceGroupName: string, clusterName: string, databaseName: string, keyType: Models.AccessKeyType, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        keyType,
        options
      },
      beginRegenerateKeyOperationSpec,
      options);
  }

  /**
   * Imports a database file to target database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param sasUri SAS URI for the target blob to import from
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginImportMethod(resourceGroupName: string, clusterName: string, databaseName: string, sasUri: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        sasUri,
        options
      },
      beginImportMethodOperationSpec,
      options);
  }

  /**
   * Exports a database file from target database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param databaseName The name of the database.
   * @param sasUri SAS URI for the target directory to export to
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExportMethod(resourceGroupName: string, clusterName: string, databaseName: string, sasUri: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        sasUri,
        options
      },
      beginExportMethodOperationSpec,
      options);
  }

  /**
   * Gets all databases in the specified RedisEnterprise cluster.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabasesListByClusterNextResponse>
   */
  listByClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabasesListByClusterNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByClusterNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DatabaseList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByClusterNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseList>): void;
  listByClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseList>, callback?: msRest.ServiceCallback<Models.DatabaseList>): Promise<Models.DatabasesListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByClusterNextOperationSpec,
      callback) as Promise<Models.DatabasesListByClusterNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByClusterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/listKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Database,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    201: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DatabaseUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginRegenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/regenerateKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      keyType: "keyType"
    },
    mapper: {
      ...Mappers.RegenerateKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginImportMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/import",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      sasUri: "sasUri"
    },
    mapper: {
      ...Mappers.ImportClusterParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginExportMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/export",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      sasUri: "sasUri"
    },
    mapper: {
      ...Mappers.ExportClusterParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByClusterNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
