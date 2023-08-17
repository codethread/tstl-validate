/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Nullable schema type.
 */
export type NullableSchema<TWrappedSchema extends BaseSchema, TOutput = Output<TWrappedSchema> | null> = BaseSchema<Input<TWrappedSchema> | null, TOutput> & {
    schema: 'nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates a nullable schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns A nullable schema.
 */
export declare function nullable<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema): NullableSchema<TWrappedSchema>;
