/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Number schema type.
 */
export type NumberSchema<TOutput = number> = BaseSchema<number, TOutput> & {
    schema: 'number';
};
/**
 * Creates a number schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
export declare function number(pipe?: Pipe<number>): NumberSchema;
/**
 * Creates a number schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
export declare function number(error?: string, pipe?: Pipe<number>): NumberSchema;
