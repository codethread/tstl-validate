/** @noSelfInFile */
import type { ParseResult, PipeAsync, ValidateInfo } from '../../types';
/**
 * Executes the async validation and transformation pipe.
 *
 * @param input The input value.
 * @param pipe The pipe to be executed.
 * @param info The validation info.
 *
 * @returns The output value.
 */
export declare function executePipeAsync<TValue>(input: TValue, pipe: PipeAsync<TValue>, info: ValidateInfo): Promise<ParseResult<TValue>>;
