/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
/**
 * Class enum type.
 */
export type Class = abstract new (...args: any) => any;
/**
 * Instance schema type.
 */
export type InstanceSchema<TClass extends Class, TOutput = InstanceType<TClass>> = BaseSchema<InstanceType<TClass>, TOutput> & {
    schema: 'instance';
    class: TClass;
};
/**
 * Creates an instance schema.
 *
 * @param of The class of the instance.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An instance schema.
 */
export declare function instance<TClass extends Class>(of: TClass, pipe?: Pipe<InstanceType<TClass>>): InstanceSchema<TClass>;
/**
 * Creates an instance schema.
 *
 * @param of The class of the instance.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An instance schema.
 */
export declare function instance<TClass extends Class>(of: TClass, error?: string, pipe?: Pipe<InstanceType<TClass>>): InstanceSchema<TClass>;
