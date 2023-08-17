/** @noSelfInFile */
import type { Pipe, PipeAsync } from "../../types";
/**
 * Returns error and pipe from dynamic arguments.
 *
 * @param arg1 First argument.
 * @param arg2 Second argument.
 *
 * @returns The error and pipe.
 */
export declare function getErrorAndPipe<TPipe extends Pipe<any> | PipeAsync<any>>(arg1?: string | TPipe, arg2?: TPipe): {
    error: string | undefined;
    pipe: TPipe;
};
