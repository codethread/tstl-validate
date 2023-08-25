import type { BaseSchema } from "../../types";
import { getIssue } from "../../utils/index";
import type { Enum } from "./types";

/**
 * Enum schema type.
 */
export type EnumSchema<
  TEnum extends Enum,
  TOutput = TEnum[number]
> = BaseSchema<TEnum[number], TOutput> & {
  schema: "enum";
  enum: TEnum;
};

/**
 * Creates a enum schema.
 *
 * @param enumValue The enum value.
 * @param error The error message.
 *
 * @returns A enum schema.
 */
export function enumType<TOption extends string, TEnum extends Enum<TOption>>(
  enumValue: TEnum,
  error?: string
): EnumSchema<TEnum> {
  return {
    /**
     * The schema type.
     */
    schema: "enum",

    /**
     * The enum value.
     */
    enum: enumValue,

    /**
     * Whether it's async.
     */
    async: false,

    /**
     * Parses unknown input based on its schema.
     *
     * @param input The input to be parsed.
     * @param info The parse info.
     *
     * @returns The parsed output.
     */
    _parse(input, info) {
      // Check type of input
      if (!enumValue.includes(input as any)) {
        return {
          issues: [
            getIssue(info, {
              reason: "type",
              validation: "enum",
              message:
                error ||
                `Invalid type, expected one of ${enumValue.join(", ")}`,
              input,
            }),
          ],
        };
      }

      // Return inpot as output
      return { output: input as TEnum[number] };
    },
  };
}
