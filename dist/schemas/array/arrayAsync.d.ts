/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, Input, Output, PipeAsync } from '../../types';
/**
 * Array schema async type.
 */
export type ArraySchemaAsync<TArrayItem extends BaseSchema | BaseSchemaAsync, TOutput = Output<TArrayItem>[]> = BaseSchemaAsync<Input<TArrayItem>[], TOutput> & {
    schema: 'array';
    array: {
        item: TArrayItem;
    };
};
/**
 * Creates an async array schema.
 *
 * @param item The item schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async array schema.
 */
export declare function arrayAsync<TArrayItem extends BaseSchema | BaseSchemaAsync>(item: TArrayItem, pipe?: PipeAsync<Output<TArrayItem>[]>): ArraySchemaAsync<TArrayItem>;
/**
 * Creates an async array schema.
 *
 * @param item The item schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async array schema.
 */
export declare function arrayAsync<TArrayItem extends BaseSchema | BaseSchemaAsync>(item: TArrayItem, error?: string, pipe?: PipeAsync<Output<TArrayItem>[]>): ArraySchemaAsync<TArrayItem>;
