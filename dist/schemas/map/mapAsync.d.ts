/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, PipeAsync } from '../../types';
import type { MapInput, MapOutput } from './types';
/**
 * Map schema async type.
 */
export type MapSchemaAsync<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync, TOutput = MapOutput<TMapKey, TMapValue>> = BaseSchemaAsync<MapInput<TMapKey, TMapValue>, TOutput> & {
    schema: 'map';
    map: {
        key: TMapKey;
        value: TMapValue;
    };
};
/**
 * Creates an async map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async map schema.
 */
export declare function mapAsync<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync>(key: TMapKey, value: TMapValue, pipe?: PipeAsync<MapOutput<TMapKey, TMapValue>>): MapSchemaAsync<TMapKey, TMapValue>;
/**
 * Creates an async map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async map schema.
 */
export declare function mapAsync<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync>(key: TMapKey, value: TMapValue, error?: string, pipe?: PipeAsync<MapOutput<TMapKey, TMapValue>>): MapSchemaAsync<TMapKey, TMapValue>;
