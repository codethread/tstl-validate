/** @noSelfInFile */
import type { BaseSchemaAsync, Input } from '../../types';
/**
 * Coerces the input of a async schema to match the required type.
 *
 * @param schema The affected schema.
 * @param action The coerceation action.
 *
 * @returns The passed schema.
 */
export declare function coerceAsync<TSchema extends BaseSchemaAsync>(schema: TSchema, action: (value: unknown) => Input<TSchema> | Promise<Input<TSchema>>): TSchema;
