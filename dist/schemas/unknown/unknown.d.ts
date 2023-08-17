/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Unknown schema type.
 */
export type UnknownSchema<TOutput = unknown> = BaseSchema<unknown, TOutput> & {
    schema: 'unknown';
};
/**
 * Creates a unknown schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A unknown schema.
 */
export declare function unknown(pipe?: Pipe<unknown>): UnknownSchema;
