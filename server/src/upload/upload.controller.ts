import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  HttpException,
  HttpStatus,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';

@UseGuards(AuthGuard())
@Controller('upload')
export class UploadController {
  @Post('media/:username')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: async (req, file, callback) => {
          const username = req.params.username;
          const uploadPath = join(
            __dirname,
            '..',
            '..',
            'uploads',
            username,
            'publications',
            'products',
          );

          // Check if the directory exists and create it if it doesn't
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }

          callback(null, uploadPath);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|mp4|mov)$/)) {
          return callback(
            new BadRequestException('Only image and video files are allowed!'),
            false,
          );
        }
        callback(null, true);
      },
      limits: { fileSize: 25 * 1024 * 1024 }, // 25 MB file size limit
    }),
  )
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Req() req) {
    try {
      if (!files || files.length === 0) {
        throw new BadRequestException(
          'No files uploaded. You need to provide at least one file.',
        );
      }

      const filePaths = files.map((file) => ({
        path: `./uploads/${req.params.username}/publications/products/${file.filename}`,
        type: file.mimetype,
      }));

      return { filePaths };
    } catch (error) {
      throw new HttpException(
        'File upload failed. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
