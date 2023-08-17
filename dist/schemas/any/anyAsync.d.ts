/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * Any schema type.
 */
export type AnySchemaAsync<TOutput = any> = BaseSchemaAsync<any, TOutput> & {
    schema: 'any';
};
/**
 * Creates an async any schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async any schema.
 */
export declare function anyAsync(pipe?: PipeAsync<any>): AnySchemaAsync;
