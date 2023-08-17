/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
/**
 * Literal schema async type.
 */
export type LiteralSchemaAsync<TLiteralValue extends string | number, TOutput = TLiteralValue> = BaseSchemaAsync<TLiteralValue, TOutput> & {
    schema: 'literal';
    literal: TLiteralValue;
};
/**
 * Creates an async literal schema.
 *
 * @param literal The literal value.
 * @param error The error message.
 *
 * @returns An async literal schema.
 */
export declare function literalAsync<TLiteral extends string | number>(literal: TLiteral, error?: string): LiteralSchemaAsync<TLiteral>;
