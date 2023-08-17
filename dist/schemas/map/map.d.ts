/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
import type { MapInput, MapOutput } from './types';
/**
 * Map schema type.
 */
export type MapSchema<TMapKey extends BaseSchema, TMapValue extends BaseSchema, TOutput = MapOutput<TMapKey, TMapValue>> = BaseSchema<MapInput<TMapKey, TMapValue>, TOutput> & {
    schema: 'map';
    map: {
        key: TMapKey;
        value: TMapValue;
    };
};
/**
 * Creates a map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A map schema.
 */
export declare function map<TMapKey extends BaseSchema, TMapValue extends BaseSchema>(key: TMapKey, value: TMapValue, pipe?: Pipe<MapOutput<TMapKey, TMapValue>>): MapSchema<TMapKey, TMapValue>;
/**
 * Creates a map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A map schema.
 */
export declare function map<TMapKey extends BaseSchema, TMapValue extends BaseSchema>(key: TMapKey, value: TMapValue, error?: string, pipe?: Pipe<MapOutput<TMapKey, TMapValue>>): MapSchema<TMapKey, TMapValue>;
