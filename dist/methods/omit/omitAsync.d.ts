/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema, type ObjectSchemaAsync } from "../../schemas/index";
import type { PipeAsync } from "../../types";
import type { ObjectKeys } from "./types";
/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function omitAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, pipe?: PipeAsync<ObjectOutput<Omit<TObjectSchema["object"], TKeys[number]>>>): ObjectSchemaAsync<Omit<TObjectSchema["object"], TKeys[number]>>;
/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function omitAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: PipeAsync<ObjectOutput<Omit<TObjectSchema["object"], TKeys[number]>>>): ObjectSchemaAsync<Omit<TObjectSchema["object"], TKeys[number]>>;
