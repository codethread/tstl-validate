/** @noSelfInFile */
import { type NonOptionalSchemaAsync, type ObjectOutput, type ObjectSchema, type ObjectSchemaAsync, type ObjectShapeAsync } from "../../schemas/index";
import type { PipeAsync } from "../../types";
/**
 * Required object schema type.
 */
type Required<TObjectShape extends ObjectShapeAsync> = {
    [TKey in keyof TObjectShape]: NonOptionalSchemaAsync<TObjectShape[TKey]>;
};
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to none optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function requiredAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, pipe?: PipeAsync<ObjectOutput<Required<TObjectSchema["object"]>>>): ObjectSchemaAsync<Required<TObjectSchema["object"]>>;
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to none optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function requiredAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, error?: string, pipe?: PipeAsync<ObjectOutput<Required<TObjectSchema["object"]>>>): ObjectSchemaAsync<Required<TObjectSchema["object"]>>;
export {};
