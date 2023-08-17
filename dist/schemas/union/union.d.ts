/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Union options type.
 */
export type UnionOptions = [
    BaseSchema<any>,
    BaseSchema<any>,
    ...BaseSchema<any>[]
];
/**
 * Union schema type.
 */
export type UnionSchema<TUnionOptions extends UnionOptions, TOutput = Output<TUnionOptions[number]>> = BaseSchema<Input<TUnionOptions[number]>, TOutput> & {
    schema: 'union';
    union: TUnionOptions;
};
/**
 * Creates a union schema.
 *
 * @param union The union schema.
 * @param error The error message.
 *
 * @returns A union schema.
 */
export declare function union<TUnionOptions extends UnionOptions>(union: TUnionOptions, error?: string): UnionSchema<TUnionOptions>;
