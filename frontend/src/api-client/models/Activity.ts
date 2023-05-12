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
 * @interface Activity
 */
export interface Activity {
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    readonly name: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Activity
     */
    readonly activityDate: Date | null;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    readonly location: number;
}

/**
 * Check if a given object implements the Activity interface.
 */
export function instanceOfActivity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "activityDate" in value;
    isInstance = isInstance && "location" in value;

    return isInstance;
}

export function ActivityFromJSON(json: any): Activity {
    return ActivityFromJSONTyped(json, false);
}

export function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'activityDate': (json['activity_date'] === null ? null : new Date(json['activity_date'])),
        'location': json['location'],
    };
}

export function ActivityToJSON(value?: Activity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

