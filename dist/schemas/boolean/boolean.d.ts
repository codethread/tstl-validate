/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Boolean schema type.
 */
export type BooleanSchema<TOutput = boolean> = BaseSchema<boolean, TOutput> & {
    schema: 'boolean';
};
/**
 * Creates a boolean schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A boolean schema.
 */
export declare function boolean(pipe?: Pipe<boolean>): BooleanSchema;
/**
 * Creates a boolean schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A boolean schema.
 */
export declare function boolean(error?: string, pipe?: Pipe<boolean>): BooleanSchema;
