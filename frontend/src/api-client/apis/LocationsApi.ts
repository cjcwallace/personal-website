/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Location,
  PatchedLocation,
} from '../models';
import {
    LocationFromJSON,
    LocationToJSON,
    PatchedLocationFromJSON,
    PatchedLocationToJSON,
} from '../models';

export interface LocationsCreateRequest {
    location?: Location;
}

export interface LocationsDestroyRequest {
    id: number;
}

export interface LocationsPartialUpdateRequest {
    id: number;
    patchedLocation?: PatchedLocation;
}

export interface LocationsRetrieveRequest {
    id: number;
}

export interface LocationsUpdateRequest {
    id: number;
    location?: Location;
}

/**
 * 
 */
export class LocationsApi extends runtime.BaseAPI {

    /**
     */
    async locationsCreateRaw(requestParameters: LocationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Location>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/locations/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationToJSON(requestParameters.location),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationFromJSON(jsonValue));
    }

    /**
     */
    async locationsCreate(requestParameters: LocationsCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Location> {
        const response = await this.locationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationsDestroyRaw(requestParameters: LocationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling locationsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/locations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async locationsDestroy(requestParameters: LocationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.locationsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async locationsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Location>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/locations/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocationFromJSON));
    }

    /**
     */
    async locationsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Location>> {
        const response = await this.locationsListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async locationsPartialUpdateRaw(requestParameters: LocationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Location>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling locationsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/locations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedLocationToJSON(requestParameters.patchedLocation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationFromJSON(jsonValue));
    }

    /**
     */
    async locationsPartialUpdate(requestParameters: LocationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Location> {
        const response = await this.locationsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationsRetrieveRaw(requestParameters: LocationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Location>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling locationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/locations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationFromJSON(jsonValue));
    }

    /**
     */
    async locationsRetrieve(requestParameters: LocationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Location> {
        const response = await this.locationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationsUpdateRaw(requestParameters: LocationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Location>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling locationsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/locations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LocationToJSON(requestParameters.location),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationFromJSON(jsonValue));
    }

    /**
     */
    async locationsUpdate(requestParameters: LocationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Location> {
        const response = await this.locationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
