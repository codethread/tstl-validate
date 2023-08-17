/** @noSelfInFile */
import type { ObjectSchema } from '../../schemas/object/index';
/**
 * Creates a strict object schema that throws an error if an input contains
 * unknown keys.
 *
 * @param schema A object schema.
 * @param error The error message.
 *
 * @returns A strict object schema.
 */
export declare function strict<TSchema extends ObjectSchema<any>>(schema: TSchema, error?: string): TSchema;
