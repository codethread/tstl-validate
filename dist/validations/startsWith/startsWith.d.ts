/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation functions that validates the start of a string.
 *
 * @param requirement The start string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function startsWith<TInput extends string>(requirement: string, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
