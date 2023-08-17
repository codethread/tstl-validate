/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
import type { NonOptional } from './nonOptional';
/**
 * Non optional schema async type.
 */
export type NonOptionalSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = NonOptional<Output<TWrappedSchema>>> = BaseSchemaAsync<NonOptional<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async non optional schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non optional schema.
 */
export declare function nonOptionalAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema, error?: string): NonOptionalSchemaAsync<TWrappedSchema>;
