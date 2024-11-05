import { InternalServerErrorException } from '@nestjs/common';
import { error } from 'console';
import * as fs from 'fs';

export function checkFileExists(path: string): boolean {
  return fs.existsSync(path);
}

export function deletingFile(path: string) {
  fs.unlink(path, (error) => {
    if (error) {
      throw new InternalServerErrorException(
        'the file you try to delete does not exist',
      );
    }
  });
}
