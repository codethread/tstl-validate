/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Null schema type.
 */
export type NullSchema<TOutput = null> = BaseSchema<null, TOutput> & {
    schema: 'null';
};
/**
 * Creates a null schema.
 *
 * @param error The error message.
 *
 * @returns A null schema.
 */
export declare function nullType(error?: string): NullSchema;
