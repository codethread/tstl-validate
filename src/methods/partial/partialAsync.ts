import {
  objectAsync,
  type ObjectOutput,
  type ObjectSchema,
  type ObjectSchemaAsync,
  type ObjectShapeAsync,
  optionalAsync,
  type OptionalSchemaAsync,
} from "../../schemas/index";
import type { BaseSchema, PipeAsync } from "../../types";
import { getErrorAndPipe } from "../../utils/index";

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
export function partialAsync<
  TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>
>(
  schema: TObjectSchema,
  pipe?: PipeAsync<ObjectOutput<Partial<TObjectSchema["object"]>>>
): ObjectSchemaAsync<Partial<TObjectSchema["object"]>>;

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
export function partialAsync<
  TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>
>(
  schema: TObjectSchema,
  error?: string,
  pipe?: PipeAsync<ObjectOutput<Partial<TObjectSchema["object"]>>>
): ObjectSchemaAsync<Partial<TObjectSchema["object"]>>;

export function partialAsync<
  TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>
>(
  schema: TObjectSchema,
  arg3?: PipeAsync<ObjectOutput<Partial<TObjectSchema["object"]>>> | string,
  arg4?: PipeAsync<ObjectOutput<Partial<TObjectSchema["object"]>>>
): ObjectSchemaAsync<Partial<TObjectSchema["object"]>> {
  // Get error and pipe argument
  const { error, pipe } = getErrorAndPipe(arg3, arg4);

  // Create and return object schema
  // @ts-ignore FIXME: Remove line once bug in TS is fixed
  return objectAsync(
    Object.entries(schema.object).reduce(
      (object, [key, schema]: [any, any]) => ({
        ...object,
        [key]: optionalAsync(schema as BaseSchema),
      }),
      {}
    ) as Partial<TObjectSchema["object"]>,
    error,
    // @ts-ignore FIXME: Remove line once bug in TS is fixed
    pipe
  );
}
