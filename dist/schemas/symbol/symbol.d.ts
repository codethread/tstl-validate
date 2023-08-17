/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Symbol schema type.
 */
export type SymbolSchema<TOutput = symbol> = BaseSchema<symbol, TOutput> & {
    schema: 'symbol';
};
/**
 * Creates a symbol schema.
 *
 * @param error The error message.
 *
 * @returns A symbol schema.
 */
export declare function symbol(error?: string): SymbolSchema;
