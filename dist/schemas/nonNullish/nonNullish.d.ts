/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Non nullish type.
 */
export type NonNullish<T> = T extends null | undefined ? never : T;
/**
 * Non nullish schema type.
 */
export type NonNullishSchema<TWrappedSchema extends BaseSchema, TOutput = NonNullish<Output<TWrappedSchema>>> = BaseSchema<NonNullish<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates a non nullish schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns A non nullish schema.
 */
export declare function nonNullish<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema, error?: string): NonNullishSchema<TWrappedSchema>;
