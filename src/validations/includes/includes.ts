import type { ParseResult, ValidateInfo } from '../../types';
import { getIssue } from '../../utils/index';

export function includes<TInput extends string>(
  requirement: string,
  error?: string
): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;

export function includes<TInput extends TItem[], TItem>(
  requirement: TItem,
  error?: string
): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;

/**
 * Creates a validation functions that validates the content of a string or array.
 *
 * @param requirement The content to be included.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function includes<TInput extends string | TItem[], TItem>(
  requirement: string | TItem,
  error?: string
) {
  return (input: TInput, info: ValidateInfo): ParseResult<TInput> => {
    if (!input.includes(requirement as any)) {
      return {
        issues: [
          getIssue(info, {
            validation: 'includes',
            message: error || 'Invalid content',
            input,
          }),
        ],
      };
    }
    return { output: input };
  };
}
