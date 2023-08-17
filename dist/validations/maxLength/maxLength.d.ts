/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The maximum length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function maxLength<TInput extends string | any[]>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
