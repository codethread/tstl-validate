/** @noSelfInFile */
import type { ParseResult, Pipe, ValidateInfo } from '../../types';
/**
 * Executes the validation and transformation pipe.
 *
 * @param input The input value.
 * @param pipe The pipe to be executed.
 * @param info The validation info.
 *
 * @returns The output value.
 */
export declare function executePipe<TValue>(input: TValue, pipe: Pipe<TValue>, info: ValidateInfo): ParseResult<TValue>;
