/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * NaN schema type.
 */
export type NanSchema<TOutput = number> = BaseSchema<number, TOutput> & {
    schema: 'nan';
};
/**
 * Creates a NaN schema.
 *
 * @param error The error message.
 *
 * @returns A NaN schema.
 */
export declare function nan(error?: string): NanSchema;
