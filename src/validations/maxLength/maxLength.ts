import type { ParseResult, ValidateInfo } from '../../types';
import { getIssue } from '../../utils/index';

/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The maximum length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function maxLength<TInput extends string | any[]>(
  requirement: number,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input.length > requirement) {
      return {
        issues: [
          getIssue(info, {
            validation: 'max_length',
            message: error || 'Invalid length',
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
