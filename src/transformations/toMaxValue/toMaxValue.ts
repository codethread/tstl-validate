import type { ParseResult } from "../../types";

/**
 * Creates a transformation function that sets a string, number or date to a
 * maximum value.
 *
 * @param requirement The maximum value.
 *
 * @returns A transformation function.
 */
export function toMaxValue<
  TInput extends string | number,
  TRequirement extends TInput
>(requirement: TRequirement) {
  return (input: TInput): ParseResult<TInput> => ({
    output: input > requirement ? requirement : input,
  });
}
