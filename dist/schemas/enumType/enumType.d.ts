/** @noSelfInFile */
import type { BaseSchema } from '../../types';
import type { Enum } from './types';
/**
 * Enum schema type.
 */
export type EnumSchema<TEnum extends Enum, TOutput = TEnum[number]> = BaseSchema<TEnum[number], TOutput> & {
    schema: 'enum';
    enum: TEnum;
};
/**
 * Creates a enum schema.
 *
 * @param enumValue The enum value.
 * @param error The error message.
 *
 * @returns A enum schema.
 */
export declare function enumType<TOption extends string, TEnum extends Enum<TOption>>(enumValue: TEnum, error?: string): EnumSchema<TEnum>;
