/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
/**
 * Special schema async type.
 */
export type SpecialSchemaAsync<TInput, TOutput = TInput> = BaseSchemaAsync<TInput, TOutput> & {
    schema: 'special';
};
/**
 * Creates an async special schema.
 *
 * @param check The type check function.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async special schema.
 */
export declare function specialAsync<TInput>(check: (input: unknown) => boolean | Promise<boolean>, pipe?: PipeAsync<TInput>): SpecialSchemaAsync<TInput>;
/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
export declare function specialAsync<TInput>(check: (input: unknown) => boolean | Promise<boolean>, error?: string, pipe?: PipeAsync<TInput>): SpecialSchemaAsync<TInput>;
