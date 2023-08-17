/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A transformation function.
 */
export declare function toCustom<TInput>(action: (input: TInput) => TInput): (input: TInput) => ParseResult<TInput>;
