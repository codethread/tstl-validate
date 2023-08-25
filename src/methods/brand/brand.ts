import type {
  AnySchema,
  AnySchemaAsync,
  ArraySchema,
  ArraySchemaAsync,
  BooleanSchema,
  BooleanSchemaAsync,
  EnumSchema,
  EnumSchemaAsync,
  InstanceSchema,
  InstanceSchemaAsync,
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
} from '../../schemas/index';
import type {
  BaseSchema,
  BaseSchemaAsync,
  Input,
  Output,
} from '../../types';

const symbol = Symbol('brand');

/**
 * Brand name type.
 */
type BrandName = string | number | symbol;

/**
 * Brand type.
 */
export type Brand<TBrandName extends BrandName> = {
  [symbol]: TBrandName;
};

export function brand<TSchema extends AnySchema, TBrandName extends BrandName>(
  schema: TSchema,
  name: TBrandName
): AnySchema<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends AnySchemaAsync,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): AnySchemaAsync<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends ArraySchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): ArraySchema<TSchema['array']['item'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends ArraySchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): ArraySchemaAsync<
  TSchema['array']['item'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends BooleanSchema,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): BooleanSchema<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends BooleanSchemaAsync,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): BooleanSchemaAsync<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends EnumSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): EnumSchema<TSchema['enum'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends EnumSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): EnumSchemaAsync<TSchema['enum'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends InstanceSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): InstanceSchema<TSchema['class'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends InstanceSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): InstanceSchemaAsync<TSchema['class'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends LiteralSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): LiteralSchema<TSchema['literal'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends LiteralSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): LiteralSchemaAsync<TSchema['literal'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NonNullableSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NonNullableSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NonNullableSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NonNullableSchemaAsync<
  TSchema['wrapped'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends NonNullishSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NonNullishSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NonNullishSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NonNullishSchemaAsync<
  TSchema['wrapped'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends NonOptionalSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NonOptionalSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NonOptionalSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NonOptionalSchemaAsync<
  TSchema['wrapped'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends NullableSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NullableSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NullableSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NullableSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NullishSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NullishSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NullishSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NullishSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NumberSchema,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NumberSchema<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends NumberSchemaAsync,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): NumberSchemaAsync<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends ObjectSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): ObjectSchema<TSchema['object'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends ObjectSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): ObjectSchemaAsync<TSchema['object'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends OptionalSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): OptionalSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends OptionalSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): OptionalSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends RecordSchema<any, any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): RecordSchema<
  TSchema['record']['key'],
  TSchema['record']['value'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends RecordSchemaAsync<any, any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): RecordSchemaAsync<
  TSchema['record']['key'],
  TSchema['record']['value'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends RecursiveSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): RecursiveSchema<TSchema['getter'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends RecursiveSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): RecursiveSchemaAsync<TSchema['getter'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends SpecialSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): SpecialSchema<Input<TSchema>, Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends SpecialSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): SpecialSchemaAsync<Input<TSchema>, Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends StringSchema,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): StringSchema<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends StringSchemaAsync,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): StringSchemaAsync<Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends TupleSchema<any, any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): TupleSchema<
  TSchema['tuple']['items'],
  TSchema['tuple']['rest'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends TupleSchemaAsync<any, any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): TupleSchemaAsync<
  TSchema['tuple']['items'],
  TSchema['tuple']['rest'],
  Output<TSchema> & Brand<TBrandName>
>;

export function brand<
  TSchema extends UnionSchema<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): UnionSchema<TSchema['union'], Output<TSchema> & Brand<TBrandName>>;

export function brand<
  TSchema extends UnionSchemaAsync<any>,
  TBrandName extends BrandName
>(
  schema: TSchema,
  name: TBrandName
): UnionSchemaAsync<TSchema['union'], Output<TSchema> & Brand<TBrandName>>;


/**
 * Brands the output type of a schema.
 *
 * @param schema The scheme to be branded.
 * @param brand The brand name.
 *
 * @returns The branded schema.
 */
export function brand<
  TSchema extends BaseSchema | BaseSchemaAsync,
  TBrandName extends BrandName
>(
  schema: TSchema,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name: TBrandName
): TSchema {
  return schema;
}
