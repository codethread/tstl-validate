/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Void schema type.
 */
export type VoidSchema<TOutput = void> = BaseSchema<void, TOutput> & {
    schema: 'void';
};
/**
 * Creates a void schema.
 *
 * @param error The error message.
 *
 * @returns A void schema.
 */
export declare function voidType(error?: string): VoidSchema;
