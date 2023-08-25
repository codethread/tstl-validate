import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation function that checks the value for equality.
 *
 * @param requirement The required value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function equal<
  TInput extends string | number | boolean,
  TRequirement extends TInput
>(requirement: TRequirement, error?: string) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input !== requirement) {
      return {
        issues: [
          getIssue(info, {
            validation: "equal",
            message: error || "Invalid input",
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
