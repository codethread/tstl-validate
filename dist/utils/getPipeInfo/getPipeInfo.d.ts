/** @noSelfInFile */
import type { IssueReason } from '../../error/index';
import type { ParseInfo, ValidateInfo } from '../../types';
/**
 * Returns the pipe info.
 *
 * @param info The parse info.
 * @param reason The issue reason.
 *
 * @returns The pipe info.
 */
export declare function getPipeInfo(info: ParseInfo | undefined, reason: IssueReason): ValidateInfo;
