/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * Symbol schema async type.
 */
export type SymbolSchemaAsync<TOutput = symbol> = BaseSchemaAsync<symbol, TOutput> & {
    schema: 'symbol';
};
/**
 * Creates an async symbol schema.
 *
 * @param error The error message.
 *
 * @returns An async symbol schema.
 */
export declare function symbolAsync(error?: string): SymbolSchemaAsync;
