/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * String schema type.
 */
export type StringSchema<TOutput = string> = BaseSchema<string, TOutput> & {
    schema: 'string';
};
/**
 * Creates a string schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A string schema.
 */
export declare function string(pipe?: Pipe<string>): StringSchema;
/**
 * Creates a string schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A string schema.
 */
export declare function string(error?: string, pipe?: Pipe<string>): StringSchema;
