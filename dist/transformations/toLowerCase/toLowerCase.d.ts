/** @noSelfInFile */
import type { ParseResult } from "../../types";
/**
 * Creates a transformation function that converts all the alphabetic
 * characters in a string to lowercase.
 *
 * @returns A transformation function.
 */
export declare function toLowerCase(): (input: string) => ParseResult<string>;
