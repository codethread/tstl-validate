import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation functions that validates the start of a string.
 *
 * @param requirement The start string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function notStartsWith<TInput extends string>(
  requirement: string,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input.startsWith(requirement as any)) {
      return {
        issues: [
          getIssue(info, {
            validation: "not_starts_with",
            message: error || `Invalid start, ${requirement} not allowed`,
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
