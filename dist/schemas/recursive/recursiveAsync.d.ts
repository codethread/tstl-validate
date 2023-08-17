/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output } from '../../types';
/**
 * Recursive schema async type.
 */
export type RecursiveSchemaAsync<TSchemaGetter extends () => BaseSchema | BaseSchemaAsync, TOutput = Output<ReturnType<TSchemaGetter>>> = BaseSchemaAsync<Input<ReturnType<TSchemaGetter>>, TOutput> & {
    schema: 'recursive';
    getter: TSchemaGetter;
};
/**
 * Creates an async recursive schema.
 *
 * @param getter The schema getter.
 *
 * @returns An async recursive schema.
 */
export declare function recursiveAsync<TSchemaGetter extends () => BaseSchema | BaseSchemaAsync>(getter: TSchemaGetter): RecursiveSchemaAsync<TSchemaGetter>;
