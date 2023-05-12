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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedTrip
 */
export interface PatchedTrip {
    /**
     * 
     * @type {number}
     * @memberof PatchedTrip
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedTrip
     */
    readonly name?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTrip
     */
    readonly tripDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedTrip
     */
    readonly location?: number;
}

/**
 * Check if a given object implements the PatchedTrip interface.
 */
export function instanceOfPatchedTrip(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedTripFromJSON(json: any): PatchedTrip {
    return PatchedTripFromJSONTyped(json, false);
}

export function PatchedTripFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTrip {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tripDate': !exists(json, 'trip_date') ? undefined : (json['trip_date'] === null ? null : new Date(json['trip_date'])),
        'location': !exists(json, 'location') ? undefined : json['location'],
    };
}

export function PatchedTripToJSON(value?: PatchedTrip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
