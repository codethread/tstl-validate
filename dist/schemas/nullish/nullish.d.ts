/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Nullish schema type.
 */
export type NullishSchema<TWrappedSchema extends BaseSchema, TOutput = Output<TWrappedSchema> | null | undefined> = BaseSchema<Input<TWrappedSchema> | null | undefined, TOutput> & {
    schema: 'nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates a nullish schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns A nullish schema.
 */
export declare function nullish<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema): NullishSchema<TWrappedSchema>;
