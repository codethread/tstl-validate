/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation function that checks the value for equality.
 *
 * @param requirement The required value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function equal<TInput extends string | number | bigint | boolean, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
