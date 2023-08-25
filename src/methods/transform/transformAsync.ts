import type {
  AnySchema,
  AnySchemaAsync,
  ArraySchema,
  ArraySchemaAsync,
  BooleanSchema,
  BooleanSchemaAsync,
  EnumSchema,
  EnumSchemaAsync,
  LiteralSchema,
  LiteralSchemaAsync,
  NonNullableSchema,
  NonNullableSchemaAsync,
  NonNullishSchema,
  NonNullishSchemaAsync,
  NonOptionalSchema,
  NonOptionalSchemaAsync,
  NullableSchema,
  NullableSchemaAsync,
  NullishSchema,
  NullishSchemaAsync,
  NumberSchema,
  NumberSchemaAsync,
  ObjectSchema,
  ObjectSchemaAsync,
  OptionalSchema,
  OptionalSchemaAsync,
  RecordSchema,
  RecordSchemaAsync,
  RecursiveSchema,
  RecursiveSchemaAsync,
  SpecialSchema,
  SpecialSchemaAsync,
  StringSchema,
  StringSchemaAsync,
  TupleSchema,
  TupleSchemaAsync,
  UnionSchema,
  UnionSchemaAsync,
} from "../../schemas/index";
import type { BaseSchema, BaseSchemaAsync, Input, Output } from "../../types";

export function transformAsync<
  TSchema extends AnySchema | AnySchemaAsync,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): AnySchemaAsync<TOutput>;

export function transformAsync<
  TSchema extends ArraySchema<any> | ArraySchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): ArraySchemaAsync<TSchema["array"]["item"], TOutput>;

export function transformAsync<
  TSchema extends BooleanSchema | BooleanSchemaAsync,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): BooleanSchemaAsync<TOutput>;

export function transformAsync<
  TSchema extends EnumSchema<any> | EnumSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): EnumSchemaAsync<TSchema["enum"], TOutput>;

export function transformAsync<
  TSchema extends LiteralSchema<any> | LiteralSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): LiteralSchemaAsync<TSchema["literal"], TOutput>;

export function transformAsync<
  TSchema extends NonNullableSchema<any> | NonNullableSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): NonNullableSchemaAsync<TSchema["wrapped"], TOutput>;

export function transformAsync<
  TSchema extends NonNullishSchema<any> | NonNullishSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): NonNullishSchemaAsync<TSchema["wrapped"], TOutput>;

export function transformAsync<
  TSchema extends NonOptionalSchema<any> | NonOptionalSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): NonOptionalSchemaAsync<TSchema["wrapped"], TOutput>;

export function transformAsync<
  TSchema extends NullableSchema<any> | NullableSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): NullableSchemaAsync<TSchema["wrapped"], TOutput>;

export function transformAsync<
  TSchema extends NullishSchema<any> | NullishSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): NullishSchemaAsync<TSchema["wrapped"], TOutput>;

export function transformAsync<
  TSchema extends NumberSchema | NumberSchemaAsync,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): NumberSchemaAsync<TOutput>;

export function transformAsync<
  TSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): ObjectSchemaAsync<TSchema["object"], TOutput>;

export function transformAsync<
  TSchema extends OptionalSchema<any> | OptionalSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): OptionalSchemaAsync<TSchema["wrapped"], TOutput>;

export function transformAsync<
  TSchema extends RecordSchema<any, any> | RecordSchemaAsync<any, any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): RecordSchemaAsync<
  TSchema["record"]["key"],
  TSchema["record"]["value"],
  TOutput
>;

export function transformAsync<
  TSchema extends RecursiveSchema<any> | RecursiveSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): RecursiveSchemaAsync<TSchema["getter"], TOutput>;

export function transformAsync<
  TSchema extends SpecialSchema<any> | SpecialSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): SpecialSchemaAsync<Input<TSchema>, TOutput>;

export function transformAsync<
  TSchema extends StringSchema | StringSchemaAsync,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): StringSchemaAsync<TOutput>;

export function transformAsync<
  TSchema extends TupleSchema<any, any> | TupleSchemaAsync<any, any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): TupleSchemaAsync<
  TSchema["tuple"]["items"],
  TSchema["tuple"]["rest"],
  TOutput
>;

export function transformAsync<
  TSchema extends UnionSchema<any> | UnionSchemaAsync<any>,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): UnionSchemaAsync<TSchema["union"], TOutput>;

/**
 * Adds an async transformation step to a schema, which is executed at the end
 * of parsing and can change the output type.
 *
 * @param schema The schema to be used.
 * @param action The transformation action.
 *
 * @returns A transformed schema.
 */
export function transformAsync<
  TSchema extends BaseSchema | BaseSchemaAsync,
  TOutput
>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput | Promise<TOutput>
): BaseSchemaAsync<Input<TSchema>, TOutput> {
  return {
    ...schema,

    /**
     * Whether it's async.
     */
    async: true,

    /**
     * Parses unknown input based on its schema.
     *
     * @param input The input to be parsed.
     * @param info The parse info.
     *
     * @returns The parsed output.
     */
    async _parse(input, info) {
      const result = await schema._parse(input, info);
      return result.issues ? result : { output: await action(result.output) };
    },
  };
}
