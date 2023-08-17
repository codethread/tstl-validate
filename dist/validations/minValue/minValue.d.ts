/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a validation functions that validates the value of a string, number or date.
 *
 * @param requirement The minimum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export declare function minValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
/**
 * See {@link minValue}
 *
 * @deprecated Function has been renamed to `minValue`.
 */
export declare const minRange: typeof minValue;
