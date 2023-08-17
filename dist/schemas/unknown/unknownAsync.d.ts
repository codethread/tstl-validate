/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * Unknown schema async type.
 */
export type UnknownSchemaAsync<TOutput = unknown> = BaseSchemaAsync<unknown, TOutput> & {
    schema: 'unknown';
};
/**
 * Creates an async unknown schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async unknown schema.
 */
export declare function unknownAsync(pipe?: PipeAsync<unknown>): UnknownSchemaAsync;
