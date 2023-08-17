/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * Boolean schema async type.
 */
export type BooleanSchemaAsync<TOutput = boolean> = BaseSchemaAsync<boolean, TOutput> & {
    schema: 'boolean';
};
/**
 * Creates an async boolean schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async boolean schema.
 */
export declare function booleanAsync(pipe?: PipeAsync<boolean>): BooleanSchemaAsync;
/**
 * Creates an async boolean schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async boolean schema.
 */
export declare function booleanAsync(error?: string, pipe?: PipeAsync<boolean>): BooleanSchemaAsync;
