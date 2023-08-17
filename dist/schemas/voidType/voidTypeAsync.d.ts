/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * Void schema async type.
 */
export type VoidSchemaAsync<TOutput = void> = BaseSchemaAsync<void, TOutput> & {
    schema: 'void';
};
/**
 * Creates an async void schema.
 *
 * @param error The error message.
 *
 * @returns An async void schema.
 */
export declare function voidTypeAsync(error?: string): VoidSchemaAsync;
