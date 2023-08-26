import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates a pattern does not match against a string
 *
 * @param requirement The pattern to be matched.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function notMatches<TInput extends string>(
  requirement: string,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    const matches = string.find(input, requirement);
    if (matches[0] !== undefined) {
      return {
        issues: [
          getIssue(info, {
            validation: "matches",
            message:
              error ||
              `Invalid content, pattern "${requirement}" should not match`,
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
