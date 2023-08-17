/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a transformation function that removes the leading white space and
 * line terminator characters from a string.
 *
 * @returns A transformation function.
 */
export declare function toTrimmedStart(): (input: string) => ParseResult<string>;
