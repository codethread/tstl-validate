/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema } from "../../schemas/index";
import type { Pipe } from "../../types";
import type { ObjectKeys } from "./types";
/**
 * Creates an object schema that contains not the selected keys of an existing
 * schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function omit<TObjectSchema extends ObjectSchema<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, pipe?: Pipe<ObjectOutput<Omit<TObjectSchema["object"], TKeys[number]>>>): ObjectSchema<Omit<TObjectSchema["object"], TKeys[number]>>;
/**
 * Creates an object schema that contains not the selected keys of an existing
 * schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function omit<TObjectSchema extends ObjectSchema<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: Pipe<ObjectOutput<Omit<TObjectSchema["object"], TKeys[number]>>>): ObjectSchema<Omit<TObjectSchema["object"], TKeys[number]>>;
