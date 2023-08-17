import type { ParseResult, ValidateInfo } from '../../types';
import { getIssue } from '../../utils/index';

/**
 * Creates a validation function that validates whether a number is a multiple.
 *
 * @param requirement The divisor.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function multipleOf<TInput extends number>(
  requirement: number,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (input % requirement !== 0) {
      return {
        issues: [
          getIssue(info, {
            validation: 'multipleOf',
            message: error || 'Invalid multiple',
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
