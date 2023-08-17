/** @noSelfInFile */
import type { BaseSchemaAsync } from '../../types';
import type { Enum } from './types';
/**
 * Enum schema async type.
 */
export type EnumSchemaAsync<TEnum extends Enum, TOutput = TEnum[number]> = BaseSchemaAsync<TEnum[number], TOutput> & {
    schema: 'enum';
    enum: TEnum;
};
/**
 * Creates an async enum schema.
 *
 * @param enumValue The enum value.
 * @param error The error message.
 *
 * @returns An async enum schema.
 */
export declare function enumTypeAsync<TOption extends string, TEnum extends Enum<TOption>>(enumValue: TEnum, error?: string): EnumSchemaAsync<TEnum>;
