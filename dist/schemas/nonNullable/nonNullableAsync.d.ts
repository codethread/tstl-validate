/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
import type { NonNullable } from './nonNullable';
/**
 * Non nullable schema async type.
 */
export type NonNullableSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = NonNullable<Output<TWrappedSchema>>> = BaseSchemaAsync<NonNullable<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async non nullable schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non nullable schema.
 */
export declare function nonNullableAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema, error?: string): NonNullableSchemaAsync<TWrappedSchema>;
