/** @noSelfInFile */
import { type NonOptionalSchema, type ObjectOutput, type ObjectSchema, type ObjectShape } from "../../schemas/index";
import type { Pipe } from "../../types";
/**
 * Required object schema type.
 */
type Required<TObjectShape extends ObjectShape> = {
    [TKey in keyof TObjectShape]: NonOptionalSchema<TObjectShape[TKey]>;
};
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to none optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function required<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, pipe?: Pipe<ObjectOutput<Required<TObjectSchema["object"]>>>): ObjectSchema<Required<TObjectSchema["object"]>>;
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to none optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function required<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, error?: string, pipe?: Pipe<ObjectOutput<Required<TObjectSchema["object"]>>>): ObjectSchema<Required<TObjectSchema["object"]>>;
export {};
