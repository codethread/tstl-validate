import type {
  AnySchema,
  ArraySchema,
  BooleanSchema,
  EnumSchema,
  InstanceSchema,
  LiteralSchema,
  NonNullishSchema,
  NonOptionalSchema,
  NullableSchema,
  NullishSchema,
  NumberSchema,
  ObjectSchema,
  OptionalSchema,
  RecordSchema,
  RecursiveSchema,
  SpecialSchema,
  StringSchema,
  TupleSchema,
  UnionSchema,
} from "../../schemas/index";
import type { BaseSchema, Input, Output } from "../../types";

export function transform<TSchema extends AnySchema, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): AnySchema<TOutput>;

export function transform<TSchema extends ArraySchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): ArraySchema<TSchema["array"]["item"], TOutput>;

export function transform<TSchema extends BooleanSchema, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): BooleanSchema<TOutput>;

export function transform<TSchema extends EnumSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): EnumSchema<TSchema["enum"], TOutput>;

export function transform<TSchema extends InstanceSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): InstanceSchema<TSchema["class"], TOutput>;

export function transform<TSchema extends LiteralSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): LiteralSchema<TSchema["literal"], TOutput>;

export function transform<TSchema extends NonNullishSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): NonNullishSchema<TSchema["wrapped"], TOutput>;

export function transform<TSchema extends NonOptionalSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): NonOptionalSchema<TSchema["wrapped"], TOutput>;

export function transform<TSchema extends NullableSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): NullableSchema<TSchema["wrapped"], TOutput>;

export function transform<TSchema extends NullishSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): NullishSchema<TSchema["wrapped"], TOutput>;

export function transform<TSchema extends NumberSchema, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): NumberSchema<TOutput>;

export function transform<TSchema extends ObjectSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): ObjectSchema<TSchema["object"], TOutput>;

export function transform<TSchema extends OptionalSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): OptionalSchema<TSchema["wrapped"], TOutput>;

export function transform<TSchema extends RecordSchema<any, any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): RecordSchema<TSchema["record"]["key"], TSchema["record"]["value"], TOutput>;

export function transform<TSchema extends RecursiveSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): RecursiveSchema<TSchema["getter"], TOutput>;

export function transform<TSchema extends SpecialSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): SpecialSchema<Input<TSchema>, TOutput>;

export function transform<TSchema extends StringSchema, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): StringSchema<TOutput>;

export function transform<TSchema extends TupleSchema<any, any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): TupleSchema<TSchema["tuple"]["items"], TSchema["tuple"]["rest"], TOutput>;

export function transform<TSchema extends UnionSchema<any>, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): UnionSchema<TSchema["union"], TOutput>;

/**
 * Adds a transformation step to a schema, which is executed at the end of
 * parsing and can change the output type.
 *
 * @param schema The schema to be used.
 * @param action The transformation action.
 *
 * @returns A transformed schema.
 */
export function transform<TSchema extends BaseSchema, TOutput>(
  schema: TSchema,
  action: (value: Output<TSchema>) => TOutput
): BaseSchema<Input<TSchema>, TOutput> {
  return {
    ...schema,

    /**
     * Parses unknown input based on its schema.
     *
     * @param input The input to be parsed.
     * @param info The parse info.
     *
     * @returns The parsed output.
     */
    _parse(input, info) {
      const result = schema._parse(input, info);
      return result.issues ? result : { output: action(result.output) };
    },
  };
}
