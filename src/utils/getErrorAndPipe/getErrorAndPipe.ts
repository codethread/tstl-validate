import type { Pipe, PipeAsync } from "../../types";

/**
 * Returns error and pipe from dynamic arguments.
 *
 * @param arg1 First argument.
 * @param arg2 Second argument.
 *
 * @returns The error and pipe.
 */
export function getErrorAndPipe<TPipe extends Pipe<any> | PipeAsync<any>>(
  arg1?: string | TPipe,
  arg2?: TPipe
): { error: string | undefined; pipe: TPipe } {
  if (!arg1 || typeof arg1 === "string") {
    const pipe = (arg2 || []) as TPipe;
    return { error: arg1, pipe };
  } else {
    const pipe = (arg1 || []) as TPipe;
    return { error: undefined, pipe };
  }

  // const [error, pipe = [] as unknown as TPipe] = !arg1 || typeof arg1 === "string" ? [arg1, arg2] : [-1, arg1];
  // return { error, pipe };
}
