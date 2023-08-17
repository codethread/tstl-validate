/** @noSelfInFile */
import type { PathItem } from '../../types';
/**
 * Returns the current path.
 *
 * @param info The parse info.
 * @param key The current key.
 *
 * @returns The current path.
 */
export declare function getPath(prevPath: PathItem[] | undefined, pathItem: PathItem): PathItem[];
