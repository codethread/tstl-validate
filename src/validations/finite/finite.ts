import type { ParseResult, ValidateInfo } from "../../types";
import { getIssue } from "../../utils/index";

/**
 * Creates a validation function that validates whether a number is finite.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function finite<TInput extends number>(error?: string) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (!Number.isFinite(input)) {
      return {
        issues: [
          getIssue(info, {
            validation: "finite",
            message: error || "Invalid infinite number",
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
