/** @noSelfInFile */
import type { IssueOrigin } from '../../error/index';
import type { ParseInfo, PathItem } from '../../types';
/**
 * Returns the parse info of a path.
 *
 * @param info The parse info.
 * @param pathItem The path item.
 *
 * @returns The parse info.
 */
export declare function getPathInfo(info: ParseInfo | undefined, path: PathItem[], origin?: IssueOrigin): ParseInfo;
