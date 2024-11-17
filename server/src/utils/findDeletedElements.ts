export function findDeletedElements(
  oldArray: string[],
  newArray: string[],
): string[] {
  const deletedElements = oldArray.filter((el) => !newArray.includes(el));

  return deletedElements;
}
