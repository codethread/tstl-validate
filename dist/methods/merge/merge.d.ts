/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema } from '../../schemas/index';
import type { Pipe } from '../../types';
import type { MergeSchemaObjects } from './types';
/**
 * Object schemas type.
 */
type ObjectSchemas = [
    ObjectSchema<any>,
    ObjectSchema<any>,
    ...ObjectSchema<any>[]
];
/**
 * Merges multiple object schemas into a single one. Subsequent object schemas
 * overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function merge<TObjectSchemas extends ObjectSchemas>(schemas: TObjectSchemas, pipe?: Pipe<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchema<MergeSchemaObjects<TObjectSchemas>>;
/**
 * Merges multiple object schemas into a single one. Subsequent object schemas
 * overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function merge<TObjectSchemas extends ObjectSchemas>(schemas: TObjectSchemas, error?: string, pipe?: Pipe<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchema<MergeSchemaObjects<TObjectSchemas>>;
export {};
