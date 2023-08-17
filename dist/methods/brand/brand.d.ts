/** @noSelfInFile */
import type { AnySchema, AnySchemaAsync, ArraySchema, ArraySchemaAsync, BigintSchema, BigintSchemaAsync, BooleanSchema, BooleanSchemaAsync, EnumSchema, EnumSchemaAsync, InstanceSchema, InstanceSchemaAsync, LiteralSchema, LiteralSchemaAsync, MapSchema, MapSchemaAsync, NanSchema, NanSchemaAsync, NativeEnumSchema, NativeEnumSchemaAsync, NeverSchema, NeverSchemaAsync, NonNullableSchema, NonNullableSchemaAsync, NonNullishSchema, NonNullishSchemaAsync, NonOptionalSchema, NonOptionalSchemaAsync, NullSchema, NullSchemaAsync, NullableSchema, NullableSchemaAsync, NullishSchema, NullishSchemaAsync, NumberSchema, NumberSchemaAsync, ObjectSchema, ObjectSchemaAsync, OptionalSchema, OptionalSchemaAsync, RecordSchema, RecordSchemaAsync, RecursiveSchema, RecursiveSchemaAsync, SetSchema, SetSchemaAsync, SpecialSchema, SpecialSchemaAsync, StringSchema, StringSchemaAsync, SymbolSchema, SymbolSchemaAsync, TupleSchema, TupleSchemaAsync, UndefinedSchema, UndefinedSchemaAsync, UnionSchema, UnionSchemaAsync, UnknownSchema, UnknownSchemaAsync, VoidSchema, VoidSchemaAsync } from '../../schemas/index';
import type { Input, Output } from '../../types';
declare const symbol: unique symbol;
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
export declare function brand<TSchema extends AnySchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): AnySchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends AnySchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): AnySchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends ArraySchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): ArraySchema<TSchema['array']['item'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends ArraySchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): ArraySchemaAsync<TSchema['array']['item'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends BigintSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): BigintSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends BigintSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): BigintSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends BooleanSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): BooleanSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends BooleanSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): BooleanSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends EnumSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): EnumSchema<TSchema['enum'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends EnumSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): EnumSchemaAsync<TSchema['enum'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends InstanceSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): InstanceSchema<TSchema['class'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends InstanceSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): InstanceSchemaAsync<TSchema['class'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends LiteralSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): LiteralSchema<TSchema['literal'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends LiteralSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): LiteralSchemaAsync<TSchema['literal'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends MapSchema<any, any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): MapSchema<TSchema['map']['key'], TSchema['map']['value'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends MapSchemaAsync<any, any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): MapSchemaAsync<TSchema['map']['key'], TSchema['map']['value'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NanSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NanSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NanSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NanSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NativeEnumSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NativeEnumSchema<TSchema['nativeEnum'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NativeEnumSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NativeEnumSchemaAsync<TSchema['nativeEnum'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NeverSchema>(schema: TSchema, action: (value: Output<TSchema>) => never): NeverSchema;
export declare function brand<TSchema extends NeverSchemaAsync>(schema: TSchema, action: (value: Output<TSchema>) => never): NeverSchemaAsync;
export declare function brand<TSchema extends NonNullableSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NonNullableSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NonNullableSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NonNullableSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NonNullishSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NonNullishSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NonNullishSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NonNullishSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NonOptionalSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NonOptionalSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NonOptionalSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NonOptionalSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NullSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NullSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NullSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NullSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NullableSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NullableSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NullableSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NullableSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NullishSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NullishSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NullishSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NullishSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NumberSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NumberSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends NumberSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): NumberSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends ObjectSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): ObjectSchema<TSchema['object'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends ObjectSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): ObjectSchemaAsync<TSchema['object'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends OptionalSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): OptionalSchema<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends OptionalSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): OptionalSchemaAsync<TSchema['wrapped'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends RecordSchema<any, any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): RecordSchema<TSchema['record']['key'], TSchema['record']['value'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends RecordSchemaAsync<any, any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): RecordSchemaAsync<TSchema['record']['key'], TSchema['record']['value'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends RecursiveSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): RecursiveSchema<TSchema['getter'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends RecursiveSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): RecursiveSchemaAsync<TSchema['getter'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends SetSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): SetSchema<TSchema['set']['value'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends SetSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): SetSchemaAsync<TSchema['set']['value'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends SpecialSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): SpecialSchema<Input<TSchema>, Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends SpecialSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): SpecialSchemaAsync<Input<TSchema>, Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends StringSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): StringSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends StringSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): StringSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends SymbolSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): SymbolSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends SymbolSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): SymbolSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends TupleSchema<any, any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): TupleSchema<TSchema['tuple']['items'], TSchema['tuple']['rest'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends TupleSchemaAsync<any, any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): TupleSchemaAsync<TSchema['tuple']['items'], TSchema['tuple']['rest'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends UndefinedSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): UndefinedSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends UndefinedSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): UndefinedSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends UnionSchema<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): UnionSchema<TSchema['union'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends UnionSchemaAsync<any>, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): UnionSchemaAsync<TSchema['union'], Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends UnknownSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): UnknownSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends UnknownSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): UnknownSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends VoidSchema, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): VoidSchema<Output<TSchema> & Brand<TBrandName>>;
export declare function brand<TSchema extends VoidSchemaAsync, TBrandName extends BrandName>(schema: TSchema, name: TBrandName): VoidSchemaAsync<Output<TSchema> & Brand<TBrandName>>;
export {};
