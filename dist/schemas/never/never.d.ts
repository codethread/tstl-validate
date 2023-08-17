/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Never schema type.
 */
export type NeverSchema = BaseSchema<never> & {
    schema: 'never';
};
/**
 * Creates a never schema.
 *
 * @param error The error message.
 *
 * @returns A never schema.
 */
export declare function never(error?: string): NeverSchema;
