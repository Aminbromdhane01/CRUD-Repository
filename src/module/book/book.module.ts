import { Module } from '@nestjs/common';

import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { BookController } from './book.controller';
import { BookProviders } from './providers/book.provider';
import { UserModule } from '../user/user.module';

@Module({
  imports: [CloudinaryModule, UserModule],
  controllers: [BookController],
  providers: [...BookProviders],
})
export class BookModule {}
