/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation function that validates whether a number is finite.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function finite<TInput extends number>(error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
