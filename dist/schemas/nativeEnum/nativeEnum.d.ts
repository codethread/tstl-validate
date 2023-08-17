/** @noSelfInFile */
import type { BaseSchema } from '../../types';
/**
 * Native enum type.
 */
export type NativeEnum = {
    [key: string]: string | number;
    [key: number]: string;
};
/**
 * Native enum schema type.
 */
export type NativeEnumSchema<TNativeEnum extends NativeEnum, TOutput = TNativeEnum[keyof TNativeEnum]> = BaseSchema<TNativeEnum[keyof TNativeEnum], TOutput> & {
    schema: 'native_enum';
    nativeEnum: TNativeEnum;
};
/**
 * Creates a enum schema.
 *
 * @param nativeEnum The native enum value.
 * @param error The error message.
 *
 * @returns A enum schema.
 */
export declare function nativeEnum<TNativeEnum extends NativeEnum>(nativeEnum: TNativeEnum, error?: string): NativeEnumSchema<TNativeEnum>;
