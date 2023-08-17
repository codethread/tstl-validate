/** @noSelfInFile */
import type { ObjectSchemaAsync } from '../../schemas/object/index';
/**
 * Creates a strict async object schema that throws an error if an input
 * contains unknown keys.
 *
 * @param schema A object schema.
 * @param error The error message.
 *
 * @returns A strict object schema.
 */
export declare function strictAsync<TSchema extends ObjectSchemaAsync<any>>(schema: TSchema, error?: string): TSchema;
