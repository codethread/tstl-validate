/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * Bigint schema async type.
 */
export type BigintSchemaAsync<TOutput = bigint> = BaseSchemaAsync<bigint, TOutput> & {
    schema: 'bigint';
};
/**
 * Creates an async bigint schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async bigint schema.
 */
export declare function bigintAsync(pipe?: PipeAsync<bigint>): BigintSchemaAsync;
/**
 * Creates an async bigint schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async bigint schema.
 */
export declare function bigintAsync(error?: string, pipe?: PipeAsync<bigint>): BigintSchemaAsync;
