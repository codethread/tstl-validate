/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation function that validates whether a number is a multiple.
 *
 * @param requirement The divisor.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function multipleOf<TInput extends number>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
