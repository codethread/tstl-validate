/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
import type { NonNullish } from './nonNullish';
/**
 * Non nullish schema async type.
 */
export type NonNullishSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = NonNullish<Output<TWrappedSchema>>> = BaseSchemaAsync<NonNullish<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async non nullish schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non nullish schema.
 */
export declare function nonNullishAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema, error?: string): NonNullishSchemaAsync<TWrappedSchema>;
