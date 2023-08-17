/** @noSelfInFile */
import type { ParseResult, ValidateInfo } from '../../types';
export declare function includes<TInput extends string>(requirement: string, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
export declare function includes<TInput extends TItem[], TItem>(requirement: TItem, error?: string): (input: TInput, info: ValidateInfo) => ParseResult<TInput>;
