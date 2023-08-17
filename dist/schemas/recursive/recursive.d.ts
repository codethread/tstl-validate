/** @noSelfInFile */
import type { BaseSchema, Input, Output } from '../../types';
/**
 * Recursive schema type.
 */
export type RecursiveSchema<TSchemaGetter extends () => BaseSchema, TOutput = Output<ReturnType<TSchemaGetter>>> = BaseSchema<Input<ReturnType<TSchemaGetter>>, TOutput> & {
    schema: 'recursive';
    getter: TSchemaGetter;
};
/**
 * Creates a recursive schema.
 *
 * @param getter The schema getter.
 *
 * @returns A recursive schema.
 */
export declare function recursive<TSchemaGetter extends () => BaseSchema>(getter: TSchemaGetter): RecursiveSchema<TSchemaGetter>;
