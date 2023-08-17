/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation functions that validates the value of a string or number.
 *
 * @param requirement The value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function value<TInput extends string | number | bigint, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
