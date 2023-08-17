/** @noSelfInFile */
import type { BaseSchema, Pipe } from "../../types";
import type { ObjectOutput, ObjectInput } from "./types";
/**
 * Object shape type.
 */
export type ObjectShape = Record<string, BaseSchema<any>>;
/**
 * Object schema type.
 */
export type ObjectSchema<TObjectShape extends ObjectShape, TOutput = ObjectOutput<TObjectShape>> = BaseSchema<ObjectInput<TObjectShape>, TOutput> & {
    schema: "object";
    object: TObjectShape;
};
/**
 * Creates an object schema.
 *
 * @param object The object schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function object<TObjectShape extends ObjectShape>(object: TObjectShape, pipe?: Pipe<ObjectOutput<TObjectShape>>): ObjectSchema<TObjectShape>;
/**
 * Creates an object schema.
 *
 * @param object The object schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export declare function object<TObjectShape extends ObjectShape>(object: TObjectShape, error?: string, pipe?: Pipe<ObjectOutput<TObjectShape>>): ObjectSchema<TObjectShape>;
