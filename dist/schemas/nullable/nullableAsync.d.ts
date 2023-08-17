/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
/**
 * Nullable schema async type.
 */
export type NullableSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = Output<TWrappedSchema> | null> = BaseSchemaAsync<Input<TWrappedSchema> | null, TOutput> & {
    schema: 'nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async nullable schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns An async nullable schema.
 */
export declare function nullableAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema): NullableSchemaAsync<TWrappedSchema>;
