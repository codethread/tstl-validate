/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Undefined schema type.
 */
export type UndefinedSchema<TOutput = undefined> = BaseSchema<undefined, TOutput> & {
    schema: 'undefined';
};
/**
 * Creates a undefined schema.
 *
 * @param error The error message.
 *
 * @returns A undefined schema.
 */
export declare function undefinedType(error?: string): UndefinedSchema;
