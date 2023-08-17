/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation functions that validates the end of a string.
 *
 * @param requirement The end string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function endsWith<TInput extends string>(requirement: string, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
