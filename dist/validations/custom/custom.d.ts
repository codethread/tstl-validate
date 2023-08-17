/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a custom validation function.
 *
 * @param requirement The validation function.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function custom<TInput>(requirement: (input: TInput) => boolean, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
