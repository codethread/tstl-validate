/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * Never schema async type.
 */
export type NeverSchemaAsync = BaseSchemaAsync<never> & {
    schema: 'never';
};
/**
 * Creates an async never schema.
 *
 * @param error The error message.
 *
 * @returns An async never schema.
 */
export declare function neverAsync(error?: string): NeverSchemaAsync;
