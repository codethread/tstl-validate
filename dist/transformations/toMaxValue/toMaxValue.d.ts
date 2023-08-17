/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a transformation function that sets a string, number or date to a
 * maximum value.
 *
 * @param requirement The maximum value.
 *
 * @returns A transformation function.
 */
export declare function toMaxValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement): (input: TInput) => ParseResult<TInput>;
