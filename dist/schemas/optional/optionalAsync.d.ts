/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
/**
 * Optional schema async type.
 */
export type OptionalSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = Output<TWrappedSchema> | undefined> = BaseSchemaAsync<Input<TWrappedSchema> | undefined, TOutput> & {
    schema: 'optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async optional schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns An async optional schema.
 */
export declare function optionalAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema): OptionalSchemaAsync<TWrappedSchema>;
