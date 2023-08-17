/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
/**
 * Nullish schema async type.
 */
export type NullishSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = Output<TWrappedSchema> | null | undefined> = BaseSchemaAsync<Input<TWrappedSchema> | null | undefined, TOutput> & {
    schema: 'nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async nullish schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns An async nullish schema.
 */
export declare function nullishAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema): NullishSchemaAsync<TWrappedSchema>;
