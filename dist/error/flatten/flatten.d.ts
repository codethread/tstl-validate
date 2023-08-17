/** @noSelfInFile */
import type { Issues, ValiError } from '../ValiError/index';
/**
 * Flat errors type.
 */
export type FlatErrors = {
    root?: [string, ...string[]];
    nested: Partial<Record<string, [string, ...string[]]>>;
};
/**
 * Flatten the error messages of a Vali error.
 *
 * @param error A Vali error.
 *
 * @returns Flat errors.
 */
export declare function flatten(error: ValiError): FlatErrors;
/**
 * Flatten the error messages of issues.
 *
 * @param issues The issues.
 *
 * @returns Flat errors.
 */
export declare function flatten(issues: Issues): FlatErrors;
