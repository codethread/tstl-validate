/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
import type { TupleOutput, TupleInput } from './types';
/**
 * Tuple shape type.
 */
export type TupleShape = [BaseSchema, ...BaseSchema[]];
/**
 * Tuple schema type.
 */
export type TupleSchema<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined, TOutput = TupleOutput<TTupleItems, TTupleRest>> = BaseSchema<TupleInput<TTupleItems, TTupleRest>, TOutput> & {
    schema: 'tuple';
    tuple: {
        items: TTupleItems;
        rest: TTupleRest;
    };
};
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
export declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
export declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, error?: string, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
export declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, rest: TTupleRest, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
export declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, rest: TTupleRest, error?: string, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
