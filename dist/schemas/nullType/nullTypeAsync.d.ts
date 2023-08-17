/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * Null schema async type.
 */
export type NullSchemaAsync<TOutput = null> = BaseSchemaAsync<null, TOutput> & {
    schema: 'null';
};
/**
 * Creates an async null schema.
 *
 * @param error The error message.
 *
 * @returns An async null schema.
 */
export declare function nullTypeAsync(error?: string): NullSchemaAsync;
