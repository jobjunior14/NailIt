import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  HttpException,
  HttpStatus,
  BadRequestException,
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
        destination: './uploads', // Folder where files are saved
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        // Accept only specific file types, e.g., images and PDFs
        if (!file.mimetype.match(/\/(jpg|jpeg|png|mp4|mov|)$/)) {
          return callback(
            new BadRequestException('Only image and Video files are allowed!'),
            false,
          );
        }
        callback(null, true);
      },
      limits: { fileSize: 25 * 1024 * 1024 }, // 15 MB file size limit
    }),
  )
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    try {
      if (!files || files.length === 0) {
        throw new BadRequestException(
          'No files uploaded. You need to provide at least one ',
        );
      }

      // Map file paths and return them
      const filePaths = files.map((file) => ({
        path: `./uploads/${file.filename}`,
        type: file.mimetype,
      }));

      return { filePaths };
    } catch (error) {
      // Handle specific errors with a custom message
      if (error instanceof HttpException) {
        throw error; // Re-throw if it's already an HttpException
      }

      // Log error and throw a general error message for unexpected cases
      console.error('File upload error:', error);
      throw new HttpException(
        'File upload failed. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
