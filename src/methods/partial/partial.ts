import {
  object,
  type ObjectOutput,
  type ObjectSchema,
  type ObjectShape,
  // optional,
  nullable,
  // type OptionalSchema,
  type NullableSchema,
} from "../../schemas/index";
import type { BaseSchema, Pipe } from "../../types";
import { getErrorAndPipe } from "../../utils/index";

/**
 * Partial object schema type.
 */
type Partial<TObjectShape extends ObjectShape> = {
  [TKey in keyof TObjectShape]: NullableSchema<TObjectShape[TKey]>;
};

/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to nullable.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export function partial<TObjectSchema extends ObjectSchema<any>>(
  schema: TObjectSchema,
  pipe?: Pipe<ObjectOutput<Partial<TObjectSchema["object"]>>>
): ObjectSchema<Partial<TObjectSchema["object"]>>;

/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to nullable.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
export function partial<TObjectSchema extends ObjectSchema<any>>(
  schema: TObjectSchema,
  error?: string,
  pipe?: Pipe<ObjectOutput<Partial<TObjectSchema["object"]>>>
): ObjectSchema<Partial<TObjectSchema["object"]>>;

export function partial<TObjectSchema extends ObjectSchema<any>>(
  schema: TObjectSchema,
  arg3?: Pipe<ObjectOutput<Partial<TObjectSchema["object"]>>> | string,
  arg4?: Pipe<ObjectOutput<Partial<TObjectSchema["object"]>>>
): ObjectSchema<Partial<TObjectSchema["object"]>> {
  // Get error and pipe argument
  const { error, pipe } = getErrorAndPipe(arg3, arg4);

  // Create and return object schema
  // @ts-ignore FIXME: Remove line once bug in TS is fixed
  return object(
    Object.entries(schema.object).reduce(
      (object, [key, schema]: [any, any]) => ({
        ...object,
        [key]: nullable(schema as BaseSchema),
      }),
      {}
    ) as Partial<TObjectSchema["object"]>,
    error,
    // @ts-ignore FIXME: Remove line once bug in TS is fixed
    pipe
  );
}
