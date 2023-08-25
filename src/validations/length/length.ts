import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function length<TInput extends string | any[]>(
  requirement: number,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input.length !== requirement) {
      return {
        issues: [
          getIssue(info, {
            validation: "length",
            message: error || `Invalid length, expected ${requirement}`,
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
