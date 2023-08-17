/** @noSelfInFile */
import { type ObjectOutput, type ObjectSchema, type ObjectShape, type OptionalSchema } from "../../schemas/index";
import type { Pipe } from "../../types";
/**
 * Partial object schema type.
 */
type Partial<TObjectShape extends ObjectShape> = {
    [TKey in keyof TObjectShape]: OptionalSchema<TObjectShape[TKey]>;
};
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function partial<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, pipe?: Pipe<ObjectOutput<Partial<TObjectSchema["object"]>>>): ObjectSchema<Partial<TObjectSchema["object"]>>;
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function partial<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, error?: string, pipe?: Pipe<ObjectOutput<Partial<TObjectSchema["object"]>>>): ObjectSchema<Partial<TObjectSchema["object"]>>;
export {};
