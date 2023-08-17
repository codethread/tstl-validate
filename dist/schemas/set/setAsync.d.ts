/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, PipeAsync } from '../../types';
import type { SetInput, SetOutput } from './types';
/**
 * Set schema async type.
 */
export type SetSchemaAsync<TSetValue extends BaseSchema | BaseSchemaAsync, TOutput = SetOutput<TSetValue>> = BaseSchemaAsync<SetInput<TSetValue>, TOutput> & {
    schema: 'set';
    set: {
        value: TSetValue;
    };
};
/**
 * Creates an async set schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async set schema.
 */
export declare function setAsync<TSetValue extends BaseSchema | BaseSchemaAsync>(value: TSetValue, pipe?: PipeAsync<SetOutput<TSetValue>>): SetSchemaAsync<TSetValue>;
/**
 * Creates an async set schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async set schema.
 */
export declare function setAsync<TSetValue extends BaseSchema | BaseSchemaAsync>(value: TSetValue, error?: string, pipe?: PipeAsync<SetOutput<TSetValue>>): SetSchemaAsync<TSetValue>;
