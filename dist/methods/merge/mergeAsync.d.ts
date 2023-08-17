/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema, type ObjectSchemaAsync } from '../../schemas/index';
import type { PipeAsync } from '../../types';
import type { MergeSchemaObjects } from './types';
/**
 * Object schemas type.
 */
type ObjectSchemas = [
    ObjectSchema<any> | ObjectSchemaAsync<any>,
    ObjectSchema<any> | ObjectSchemaAsync<any>,
    ...(ObjectSchema<any> | ObjectSchemaAsync<any>)[]
];
/**
 * Merges multiple async object schemas into a single one. Subsequent object
 * schemas overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function mergeAsync<TObjectSchemas extends ObjectSchemas>(schemas: TObjectSchemas, pipe?: PipeAsync<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchemaAsync<MergeSchemaObjects<TObjectSchemas>>;
/**
 * Merges multiple async object schemas into a single one. Subsequent object
 * schemas overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function mergeAsync<TObjectSchemas extends ObjectSchemas>(schemas: TObjectSchemas, error?: string, pipe?: PipeAsync<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchemaAsync<MergeSchemaObjects<TObjectSchemas>>;
export {};
