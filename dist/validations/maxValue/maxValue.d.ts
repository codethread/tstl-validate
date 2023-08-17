/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation functions that validates the value of a string, number or date.
 *
 * @param requirement The maximum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function maxValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
/**
 * See {@link maxValue}
 *
 * @deprecated Function has been renamed to `maxValue`.
 */
export declare const maxRange: typeof maxValue;
