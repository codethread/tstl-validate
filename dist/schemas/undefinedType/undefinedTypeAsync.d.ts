/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * Undefined schema async type.
 */
export type UndefinedSchemaAsync<TOutput = undefined> = BaseSchemaAsync<undefined, TOutput> & {
    schema: 'undefined';
};
/**
 * Creates an async undefined schema.
 *
 * @param error The error message.
 *
 * @returns An async undefined schema.
 */
export declare function undefinedTypeAsync(error?: string): UndefinedSchemaAsync;
