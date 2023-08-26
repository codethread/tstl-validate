import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates the end of a string.
 *
 * @param requirement The end string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function endsWith<TInput extends string>(
  requirement: string,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (!input.endsWith(requirement as any)) {
      return {
        issues: [
          getIssue(info, {
            validation: "ends_with",
            message: error || `Invalid end, expected ${requirement}`,
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
