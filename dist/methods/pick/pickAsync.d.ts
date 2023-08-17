/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema, type ObjectSchemaAsync } from "../../schemas/index";
import type { PipeAsync } from "../../types";
/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function pickAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends (keyof TObjectSchema["object"])[]>(schema: TObjectSchema, keys: TKeys, pipe?: PipeAsync<ObjectOutput<Pick<TObjectSchema["object"], TKeys[number]>>>): ObjectSchemaAsync<Pick<TObjectSchema["object"], TKeys[number]>>;
/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function pickAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends (keyof TObjectSchema["object"])[]>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: PipeAsync<ObjectOutput<Pick<TObjectSchema["object"], TKeys[number]>>>): ObjectSchemaAsync<Pick<TObjectSchema["object"], TKeys[number]>>;
