/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Optional schema type.
 */
export type OptionalSchema<TWrappedSchema extends BaseSchema, TOutput = Output<TWrappedSchema> | undefined> = BaseSchema<Input<TWrappedSchema> | undefined, TOutput> & {
    schema: 'optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates a optional schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns A optional schema.
 */
export declare function optional<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema): OptionalSchema<TWrappedSchema>;
