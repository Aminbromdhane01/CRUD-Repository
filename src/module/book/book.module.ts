import { Module } from '@nestjs/common';

import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { BookController } from './book.controller';
import { BookProviders } from './providers/book.provider';

@Module({
  imports: [CloudinaryModule],
  controllers: [BookController],
  providers: [...BookProviders],
})
export class BookModule {}
