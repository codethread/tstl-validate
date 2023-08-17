/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * NaN schema async type.
 */
export type NanSchemaAsync<TOutput = number> = BaseSchemaAsync<number, TOutput> & {
    schema: 'nan';
};
/**
 * Creates an async NaN schema.
 *
 * @param error The error message.
 *
 * @returns An async NaN schema.
 */
export declare function nanAsync(error?: string): NanSchemaAsync;
