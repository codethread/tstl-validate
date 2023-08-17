/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
/**
 * Creates a async custom validation function.
 *
 * @param requirement The async validation function.
 * @param error The error message.
 *
 * @returns A async validation function.
 */
export declare function customAsync<TInput>(requirement: (input: TInput) => Promise<boolean>, error?: string): (input: TInput, info: ValidateInfo) => Promise<ParseResult<TInput>>;
