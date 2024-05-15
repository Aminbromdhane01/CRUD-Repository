import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { BookModule } from './module/book/book.module';
import { CommentModule } from './module/comment/comment.module';
import { SentimentalAnalysisModule } from './module/sentimental-analysis/sentimental-analysis.module';
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'cloudinary',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: '',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    UserModule,
    BookModule,
    CommentModule,
    SentimentalAnalysisModule,
  ],
})
export class AppModule {}
