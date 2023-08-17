/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema, type ObjectSchemaAsync, type ObjectShapeAsync, type OptionalSchemaAsync } from "../../schemas/index";
import type { PipeAsync } from "../../types";
/**
 * Partial object schema type.
 */
type Partial<TObjectShape extends ObjectShapeAsync> = {
    [TKey in keyof TObjectShape]: OptionalSchemaAsync<TObjectShape[TKey]>;
};
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function partialAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, pipe?: PipeAsync<ObjectOutput<Partial<TObjectSchema["object"]>>>): ObjectSchemaAsync<Partial<TObjectSchema["object"]>>;
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function partialAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, error?: string, pipe?: PipeAsync<ObjectOutput<Partial<TObjectSchema["object"]>>>): ObjectSchemaAsync<Partial<TObjectSchema["object"]>>;
export {};
