/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * String schema async type.
 */
export type StringSchemaAsync<TOutput = string> = BaseSchemaAsync<string, TOutput> & {
    schema: 'string';
};
/**
 * Creates an async string schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async string schema.
 */
export declare function stringAsync(pipe?: PipeAsync<string>): StringSchemaAsync;
/**
 * Creates an async string schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async string schema.
 */
export declare function stringAsync(error?: string, pipe?: PipeAsync<string>): StringSchemaAsync;
