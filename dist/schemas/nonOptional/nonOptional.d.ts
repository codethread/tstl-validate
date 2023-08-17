/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Non optional type.
 */
export type NonOptional<T> = T extends undefined ? never : T;
/**
 * Non optional schema type.
 */
export type NonOptionalSchema<TWrappedSchema extends BaseSchema, TOutput = NonOptional<Output<TWrappedSchema>>> = BaseSchema<NonOptional<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates a non optional schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns A non optional schema.
 */
export declare function nonOptional<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema, error?: string): NonOptionalSchema<TWrappedSchema>;
