import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates the value of a string or number.
 *
 * @param requirement The value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function value<
  TInput extends string | number,
  TRequirement extends TInput
>(requirement: TRequirement, error?: string) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input !== requirement) {
      return {
        issues: [
          getIssue(info, {
            validation: "value",
            message: error || "Invalid value",
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
