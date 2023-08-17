/** @noSelfInFile */
import type { NonNullableSchema, NonNullableSchemaAsync, NonNullishSchema, NonNullishSchemaAsync, NonOptionalSchema, NonOptionalSchemaAsync, NullableSchema, NullableSchemaAsync, NullishSchema, NullishSchemaAsync, OptionalSchema, OptionalSchemaAsync } from '../../schemas/index';
/**
 * Unwraps the wrapped schema.
 *
 * @param schema The schema to be unwrapped.
 *
 * @returns The unwrapped schema.
 */
export declare function unwrap<TSchema extends OptionalSchema<any> | OptionalSchemaAsync<any> | NullableSchema<any> | NullableSchemaAsync<any> | NullishSchema<any> | NullishSchemaAsync<any> | NonOptionalSchema<any> | NonOptionalSchemaAsync<any> | NonNullableSchema<any> | NonNullableSchemaAsync<any> | NonNullishSchema<any> | NonNullishSchemaAsync<any>>(schema: TSchema): TSchema['wrapped'];
