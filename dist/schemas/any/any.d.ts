/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Any schema type.
 */
export type AnySchema<TOutput = any> = BaseSchema<any, TOutput> & {
    schema: 'any';
};
/**
 * Creates a any schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A any schema.
 */
export declare function any(pipe?: Pipe<any>): AnySchema;
