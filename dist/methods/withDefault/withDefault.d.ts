/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input } from '../../types';
/**
 * Passes a default value to a schema in case of an undefined input.
 *
 * @param schema The affected schema.
 * @param value The default value.
 *
 * @returns The passed schema.
 */
export declare function withDefault<TSchema extends BaseSchema | BaseSchemaAsync>(schema: TSchema, value: Input<TSchema>): TSchema;
/**
 * See {@link withDefault}
 *
 * @deprecated Function has been renamed to `withDefault`.
 */
export declare const useDefault: typeof withDefault;
