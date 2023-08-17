export function isLuaTable(input: unknown): input is object {
  if (
    !input &&
    typeof input !== "object" // will become table in transpilation
  )
    return false;

  let i = -1;
  for (const key of input as any) {
    i = i + 1;
    if (key[i] === null) {
      return false;
    }
  }
  return true;
}

export function isLuaArray(input: unknown): input is Array<unknown> {
  if (
    !input &&
    typeof input !== "object" // will become table in transpilation
  )
    return false;

  let i = -1;
  for (const key of input as any) {
    i = i + 1;
    if (key[i] !== null) {
      return false;
    }
  }
  return true;
}
