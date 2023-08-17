/** @noSelfInFile */
import type { ParseResult } from '../../types';
/**
 * Creates a transformation function that sets a string, number or date to a
 * minimum value.
 *
 * @param requirement The minimum value.
 *
 * @returns A transformation function.
 */
export declare function toMinValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement): (input: TInput) => ParseResult<TInput>;
