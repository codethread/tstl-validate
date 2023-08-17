/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * Number schema async type.
 */
export type NumberSchemaAsync<TOutput = number> = BaseSchemaAsync<number, TOutput> & {
    schema: 'number';
};
/**
 * Creates an async number schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async number schema.
 */
export declare function numberAsync(pipe?: PipeAsync<number>): NumberSchemaAsync;
/**
 * Creates an async number schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async number schema.
 */
export declare function numberAsync(error?: string, pipe?: PipeAsync<number>): NumberSchemaAsync;
