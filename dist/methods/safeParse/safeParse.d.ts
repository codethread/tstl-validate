/** @noSelfInFile */
import { Result } from "tstl-result";
import { type Issues } from "../../error/index";
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
/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
export declare function safeParse<TSchema extends BaseSchema>(schema: TSchema, input: unknown, info?: Pick<ParseInfo, "abortEarly" | "abortPipeEarly">): Result<Output<TSchema>, Issues>;
