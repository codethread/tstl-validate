/** @noSelfInFile */
import type { BaseSchema, Input, Output, Pipe } from "../../types";
/**
 * Array path item type.
 */
export type ArrayPathItem = {
    schema: "array";
    input: any[];
    key: number;
    value: any;
};
/**
 * Array schema type.
 */
export type ArraySchema<TArrayItem extends BaseSchema, TOutput = Output<TArrayItem>[]> = BaseSchema<Input<TArrayItem>[], TOutput> & {
    schema: "array";
    array: {
        item: TArrayItem;
    };
};
/**
 * Creates a array schema.
 *
 * @param item The item schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A array schema.
 */
export declare function array<TArrayItem extends BaseSchema>(item: TArrayItem, pipe?: Pipe<Output<TArrayItem>[]>): ArraySchema<TArrayItem>;
/**
 * Creates a array schema.
 *
 * @param item The item schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A array schema.
 */
export declare function array<TArrayItem extends BaseSchema>(item: TArrayItem, error?: string, pipe?: Pipe<Output<TArrayItem>[]>): ArraySchema<TArrayItem>;
