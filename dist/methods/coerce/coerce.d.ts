/** @noSelfInFile */
import type { BaseSchema, Input } from '../../types';
/**
 * Coerces the input of a schema to match the required type.
 *
 * @param schema The affected schema.
 * @param action The coerceation action.
 *
 * @returns The passed schema.
 */
export declare function coerce<TSchema extends BaseSchema>(schema: TSchema, action: (value: unknown) => Input<TSchema>): TSchema;
