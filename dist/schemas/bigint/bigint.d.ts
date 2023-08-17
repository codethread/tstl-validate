/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Bigint schema type.
 */
export type BigintSchema<TOutput = bigint> = BaseSchema<bigint, TOutput> & {
    schema: 'bigint';
};
/**
 * Creates a bigint schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A bigint schema.
 */
export declare function bigint(pipe?: Pipe<bigint>): BigintSchema;
/**
 * Creates a bigint schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A bigint schema.
 */
export declare function bigint(error?: string, pipe?: Pipe<bigint>): BigintSchema;
