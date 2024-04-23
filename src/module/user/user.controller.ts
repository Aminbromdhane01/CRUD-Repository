import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Injectable,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { IUserService, USER_SERVIVE } from './user.service.interface';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';

import * as path from 'path';
import { UploadInterceptor } from '../cloudinary/local.file.interceptor';
import { ImageUploadValidationPipe } from '../cloudinary/upload.image.pipe';
export interface publicId {
  publicId: string;
}

@Controller('user')
@Injectable()
export class UserController {
  @Inject(USER_SERVIVE) private readonly userService: IUserService;

  @Post()
  @UsePipes(new ImageUploadValidationPipe())
  @UseInterceptors(FileInterceptor('image'))
  async createUser(
    @Body() user: UserDto,
    @UploadedFile() image: any,
  ): Promise<User> {
    return await this.userService.createUser(image, user);
  }
  @Get()
  async findAllUsers(): Promise<{ data: User[]; count: number }> {
    return await this.userService.findAll();
  }
  @Post('upload')
  @UsePipes(new ImageUploadValidationPipe())
  @UseInterceptors(UploadInterceptor)
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
  @Post('delete-image')
  deleteImage(@Body() { publicId }: publicId) {
    this.userService.deletephoto(publicId);
  }
  @Delete(':imageName')
  deleteImages(@Param('imageName') imageName: string) {
    console.log(imageName);

    const imagePath = path.join('uploads', imageName);
    console.log(imagePath);

    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      // Delete the file
      fs.unlinkSync(imagePath);
      return { message: 'Image deleted successfully' };
    } else {
      return { message: 'Image not found' };
    }
  }
  @Get('/:id')
  getUserbyId(@Param('id') id: string) {
    return this.userService.finfbyid(+id);
  }
}
