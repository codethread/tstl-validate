/** @noSelfInFile */
import type { Issue } from '../../error/index';
import type { ParseInfo, ValidateInfo } from '../../types';
/**
 * Returns the final issue data.
 *
 * @param info The parse info.
 * @param issue The issue data.
 *
 * @returns The issue data.
 */
export declare function getIssue(info: ParseInfo | undefined, issue: Pick<Issue, 'reason' | 'validation' | 'message' | 'input' | 'issues'>): Issue;
/**
 * Returns the final issue data.
 *
 * @param info The validate info.
 * @param issue The issue data.
 *
 * @returns The issue data.
 */
export declare function getIssue(info: ValidateInfo, issue: Pick<Issue, 'validation' | 'message' | 'input' | 'issues'>): Issue;
