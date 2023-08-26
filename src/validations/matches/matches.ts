import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates a pattern against a string.
 *
 * @param requirement The pattern to be matched.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function matches<TInput extends string>(
  requirement: string,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    const matches = string.find(input, requirement);
    if (matches[0] === undefined) {
      return {
        issues: [
          getIssue(info, {
            validation: "matches",
            message:
              error ||
              `Invalid content, expected to match pattern "${requirement}"`,
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
