import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('upload')
export class UploadController {
  @Post('media')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: '../uploads', // Folder where files are saved
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
    // Return file paths after upload
    const filePaths = files.map((file) => ({
      path: `../uploads/${file.filename}`,
      type: file.mimetype,
    }));

    console.log(filePaths);
    return { filePaths };
  }
}
