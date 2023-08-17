/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
/**
 * Union options async type.
 */
export type UnionOptionsAsync = [
    BaseSchema | BaseSchemaAsync,
    BaseSchema | BaseSchemaAsync,
    ...(BaseSchema[] | BaseSchemaAsync[])
];
/**
 * Union schema async type.
 */
export type UnionSchemaAsync<TUnionOptions extends UnionOptionsAsync, TOutput = Output<TUnionOptions[number]>> = BaseSchemaAsync<Input<TUnionOptions[number]>, TOutput> & {
    schema: 'union';
    union: TUnionOptions;
};
/**
 * Creates an async union schema.
 *
 * @param union The union schema.
 * @param error The error message.
 *
 * @returns An async union schema.
 */
export declare function unionAsync<TUnionOptions extends UnionOptionsAsync>(union: TUnionOptions, error?: string): UnionSchemaAsync<TUnionOptions>;
