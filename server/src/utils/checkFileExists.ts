import * as fs from 'fs';

export function checkFileExists(path: string): boolean {
  return fs.existsSync(path);
}
