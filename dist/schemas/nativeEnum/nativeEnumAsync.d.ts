/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
import type { NativeEnum } from './nativeEnum';
/**
 * Native enum schema async type.
 */
export type NativeEnumSchemaAsync<TNativeEnum extends NativeEnum, TOutput = TNativeEnum[keyof TNativeEnum]> = BaseSchemaAsync<TNativeEnum[keyof TNativeEnum], TOutput> & {
    schema: 'native_enum';
    nativeEnum: TNativeEnum;
};
/**
 * Creates an async enum schema.
 *
 * @param nativeEnum The native enum value.
 * @param error The error message.
 *
 * @returns An async enum schema.
 */
export declare function nativeEnumAsync<TNativeEnum extends NativeEnum>(nativeEnum: TNativeEnum, error?: string): NativeEnumSchemaAsync<TNativeEnum>;
