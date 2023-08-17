import type { ParseResult, ValidateInfo } from '../../types';
import { getIssue } from '../../utils/index';

/**
 * Creates a custom validation function.
 *
 * @param requirement The validation function.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function custom<TInput>(
  requirement: (input: TInput) => boolean,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (!requirement(input)) {
      return {
        issues: [
          getIssue(info, {
            validation: 'custom',
            message: error || 'Invalid input',
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
