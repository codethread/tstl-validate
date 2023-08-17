/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Output, ParseInfo } from '../../types';
/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
export declare function parseAsync<TSchema extends BaseSchema | BaseSchemaAsync>(schema: TSchema, input: unknown, info?: Pick<ParseInfo, 'abortEarly' | 'abortPipeEarly'>): Promise<Output<TSchema>>;
