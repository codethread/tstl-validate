/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Special schema type.
 */
export type SpecialSchema<TInput, TOutput = TInput> = BaseSchema<TInput, TOutput> & {
    schema: 'special';
};
/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
export declare function special<TInput>(check: (input: unknown) => boolean, pipe?: Pipe<TInput>): SpecialSchema<TInput>;
/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
export declare function special<TInput>(check: (input: unknown) => boolean, error?: string, pipe?: Pipe<TInput>): SpecialSchema<TInput>;
