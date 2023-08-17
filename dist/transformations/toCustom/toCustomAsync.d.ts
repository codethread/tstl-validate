/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a async custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A async transformation function.
 */
export declare function toCustomAsync<TInput>(action: (input: TInput) => TInput | Promise<TInput>): (input: TInput) => Promise<ParseResult<TInput>>;
