/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Literal schema type.
 */
export type LiteralSchema<TLiteralValue extends string | number, TOutput = TLiteralValue> = BaseSchema<TLiteralValue, TOutput> & {
    schema: 'literal';
    literal: TLiteralValue;
};
/**
 * Creates a literal schema.
 *
 * @param literal The literal value.
 * @param error The error message.
 *
 * @returns A literal schema.
 */
export declare function literal<TLiteral extends string | number>(literal: TLiteral, error?: string): LiteralSchema<TLiteral>;
