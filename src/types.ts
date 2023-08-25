import type { Issue, Issues } from "./error/index";
import type {
  ArrayPathItem,
  ObjectPathItem,
  RecordPathItem,
  TuplePathItem,
} from "./schemas/index";

/**
 * Parse info type.
 */
export type ParseInfo = Partial<
  Pick<Issue, "origin" | "path" | "abortEarly" | "abortPipeEarly">
>;

/**
 * Validate info type.
 */
export type ValidateInfo = ParseInfo & Pick<Issue, "reason">;

/**
 * Path item type.
 */
export type PathItem =
  | ObjectPathItem
  | RecordPathItem
  | TuplePathItem
  | ArrayPathItem;

/**
 * Parse result type.
 */
export type ParseResult<TOutput> =
  | { output: TOutput; issues?: undefined }
  | { output?: undefined; issues: Issues };

/**
 * Base schema type.
 */
export type BaseSchema<TInput = any, TOutput = TInput> = {
  async: false;
  _parse(input: unknown, info?: ParseInfo): ParseResult<TOutput>;
  types?: { input: TInput; output: TOutput };
};

/**
 * Base schema async type.
 */
export type BaseSchemaAsync<TInput = any, TOutput = TInput> = {
  async: true;
  _parse(input: unknown, info?: ParseInfo): Promise<ParseResult<TOutput>>;
  types?: { input: TInput; output: TOutput };
};

/**
 * Input inference type.
 */
export type Input<TSchema extends BaseSchema | BaseSchemaAsync> = NonNullable<
  TSchema["types"]
>["input"];

/**
 * Output inference type.
 */
export type Output<TSchema extends BaseSchema | BaseSchemaAsync> = NonNullable<
  TSchema["types"]
>["output"];

/**
 * Validation and transformation pipe type.
 */
export type Pipe<TValue> = ((
  value: TValue,
  info: ValidateInfo
) => ParseResult<TValue>)[];

/**
 * Async validation and transformation pipe type.
 */
export type PipeAsync<TValue> = ((
  value: TValue,
  info: ValidateInfo
) => ParseResult<TValue> | Promise<ParseResult<TValue>>)[];

/**
 * Resolve type.
 *
 * Hint: This type has no effect and is only used so that TypeScript displays
 * the final type in the preview instead of the utility types used.
 */
type Resolve<T> = T;

/**
 * Resolve object type.
 *
 * Hint: This type has no effect and is only used so that TypeScript displays
 * the final type in the preview instead of the utility types used.
 */
export type ResolveObject<T> = Resolve<{ [k in keyof T]: T[k] }>;
