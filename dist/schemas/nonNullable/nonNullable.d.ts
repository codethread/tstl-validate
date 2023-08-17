/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Non nullable type.
 */
export type NonNullable<T> = T extends null ? never : T;
/**
 * Non nullable schema type.
 */
export type NonNullableSchema<TWrappedSchema extends BaseSchema, TOutput = NonNullable<Output<TWrappedSchema>>> = BaseSchema<NonNullable<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates a non nullable schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns A non nullable schema.
 */
export declare function nonNullable<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema, error?: string): NonNullableSchema<TWrappedSchema>;
