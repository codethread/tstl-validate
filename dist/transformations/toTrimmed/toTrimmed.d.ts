/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a transformation function that removes the leading and trailing
 * white space and line terminator characters from a string.
 *
 * @returns A transformation function.
 */
export declare function toTrimmed(): (input: string) => ParseResult<string>;
