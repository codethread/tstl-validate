import { Result, err, ok } from "neverthrow";
import { type Issues, ValiError } from "../../error/index";
import type { BaseSchema, Output, ParseInfo } from "../../types";

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
// export function safeParse<TSchema extends BaseSchema>(
//   schema: TSchema,
//   input: unknown,
//   info?: Pick<ParseInfo, 'abortEarly' | 'abortPipeEarly'>
// ):
//   | { success: true; data: Output<TSchema> }
//   | {
//       success: false;
//       /**
//        * @deprecated Please use `.issues` instead.
//        */
//       error: ValiError;
//       issues: Issues;
//     } {
//   const result = schema._parse(input, info);
//   return result.issues
//     ? {
//         success: false,
//         error: new ValiError(result.issues),
//         issues: result.issues,
//       }
//     : { success: true, data: result.output };
// }

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
export function safeParse<TSchema extends BaseSchema>(
  schema: TSchema,
  input: unknown,
  info?: Pick<ParseInfo, "abortEarly" | "abortPipeEarly">
): Result<Output<TSchema>, Issues> {
  const result = schema._parse(input, info);
  return result.issues ? err(result.issues) : ok(result.output);
}
