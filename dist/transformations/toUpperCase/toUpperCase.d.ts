/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a transformation function that converts all the alphabetic
 * characters in a string to uppercase.
 *
 * @returns A transformation function.
 */
export declare function toUpperCase(): (input: string) => ParseResult<string>;
