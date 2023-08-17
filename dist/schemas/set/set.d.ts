/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
import type { SetInput, SetOutput } from './types';
/**
 * Set schema type.
 */
export type SetSchema<TSetValue extends BaseSchema, TOutput = SetOutput<TSetValue>> = BaseSchema<SetInput<TSetValue>, TOutput> & {
    schema: 'set';
    set: {
        value: TSetValue;
    };
};
/**
 * Creates a set schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A set schema.
 */
export declare function set<TSetValue extends BaseSchema>(value: TSetValue, pipe?: Pipe<SetOutput<TSetValue>>): SetSchema<TSetValue>;
/**
 * Creates a set schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A set schema.
 */
export declare function set<TSetValue extends BaseSchema>(value: TSetValue, error?: string, pipe?: Pipe<SetOutput<TSetValue>>): SetSchema<TSetValue>;
