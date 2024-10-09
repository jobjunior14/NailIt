//normalize the name and prename
export const normalizeName = (name: string): string => {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
};
