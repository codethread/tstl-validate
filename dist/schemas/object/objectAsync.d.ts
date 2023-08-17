/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, PipeAsync } from "../../types";
import type { ObjectInput, ObjectOutput } from "./types";
/**
 * Object shape async type.
 */
export type ObjectShapeAsync = Record<string, BaseSchema<any> | BaseSchemaAsync<any>>;
/**
 * Object schema async type.
 */
export type ObjectSchemaAsync<TObjectShape extends ObjectShapeAsync, TOutput = ObjectOutput<TObjectShape>> = BaseSchemaAsync<ObjectInput<TObjectShape>, TOutput> & {
    schema: "object";
    object: TObjectShape;
};
/**
 * Creates an async object schema.
 *
 * @param object The object schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function objectAsync<TObjectShape extends ObjectShapeAsync>(object: TObjectShape, pipe?: PipeAsync<ObjectOutput<TObjectShape>>): ObjectSchemaAsync<TObjectShape>;
/**
 * Creates an async object schema.
 *
 * @param object The object schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export declare function objectAsync<TObjectShape extends ObjectShapeAsync>(object: TObjectShape, error?: string, pipe?: PipeAsync<ObjectOutput<TObjectShape>>): ObjectSchemaAsync<TObjectShape>;
