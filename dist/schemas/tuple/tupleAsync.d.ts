/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, PipeAsync } from '../../types';
import type { TupleInput, TupleOutput } from './types';
/**
 * Tuple shape async type.
 */
export type TupleShapeAsync = [
    BaseSchema | BaseSchemaAsync,
    ...(BaseSchema[] | BaseSchemaAsync[])
];
/**
 * Tuple schema async type.
 */
export type TupleSchemaAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined, TOutput = TupleOutput<TTupleItems, TTupleRest>> = BaseSchemaAsync<TupleInput<TTupleItems, TTupleRest>, TOutput> & {
    schema: 'tuple';
    tuple: {
        items: TTupleItems;
        rest: TTupleRest;
    };
};
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
export declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
export declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, error?: string, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
export declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, rest: TTupleRest, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
export declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, rest: TTupleRest, error?: string, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
