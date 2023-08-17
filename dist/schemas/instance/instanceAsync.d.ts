/** @noSelfInFile */
import type { BaseSchemaAsync, PipeAsync } from '../../types';
import { type Class } from './instance';
/**
 * Instance schema type.
 */
export type InstanceSchemaAsync<TClass extends Class, TOutput = InstanceType<TClass>> = BaseSchemaAsync<InstanceType<TClass>, TOutput> & {
    schema: 'instance';
    class: TClass;
};
/**
 * Creates an async instance schema.
 *
 * @param of The class of the instance.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async instance schema.
 */
export declare function instanceAsync<TClass extends Class>(of: TClass, pipe?: PipeAsync<InstanceType<TClass>>): InstanceSchemaAsync<TClass>;
/**
 * Creates an async instance schema.
 *
 * @param of The class of the instance.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async instance schema.
 */
export declare function instanceAsync<TClass extends Class>(of: TClass, error?: string, pipe?: PipeAsync<InstanceType<TClass>>): InstanceSchemaAsync<TClass>;
