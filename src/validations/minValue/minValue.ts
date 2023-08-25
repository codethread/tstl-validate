import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates the value of a string, number or date.
 *
 * @param requirement The minimum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function minValue<
  TInput extends string | number,
  TRequirement extends TInput
>(requirement: TRequirement, error?: string) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input < requirement) {
      return {
        issues: [
          getIssue(info, {
            validation: "min_value",
            message:
              error || `Invalid value, expected more than ${requirement}`,
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
