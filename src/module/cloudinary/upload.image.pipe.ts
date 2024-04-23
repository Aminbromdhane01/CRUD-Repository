import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ImageUploadValidationPipe implements PipeTransform {
  transform(file: Express.Multer.File): Express.Multer.File {
    if (!file || !file.mimetype || !file.mimetype.includes('jpeg')) {
      throw new BadRequestException('Uploaded file is not a JPEG image');
    }

    if (!file || !file.size || file.size > 1000) {
      throw new BadRequestException(
        'Uploaded file exceeds maximum size (1000 bytes)',
      );
    }

    return file;
  }
}
