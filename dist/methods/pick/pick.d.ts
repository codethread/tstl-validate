/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema } from "../../schemas/index";
import type { Pipe } from "../../types";
/**
 * Creates an object schema that contains only the selected keys of an existing
 * schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function pick<TObjectSchema extends ObjectSchema<any>, TKeys extends (keyof TObjectSchema["object"])[]>(schema: TObjectSchema, keys: TKeys, pipe?: Pipe<ObjectOutput<Pick<TObjectSchema["object"], TKeys[number]>>>): ObjectSchema<Pick<TObjectSchema["object"], TKeys[number]>>;
/**
 * Creates an object schema that contains only the selected keys of an existing
 * schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function pick<TObjectSchema extends ObjectSchema<any>, TKeys extends (keyof TObjectSchema["object"])[]>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: Pipe<ObjectOutput<Pick<TObjectSchema["object"], TKeys[number]>>>): ObjectSchema<Pick<TObjectSchema["object"], TKeys[number]>>;
