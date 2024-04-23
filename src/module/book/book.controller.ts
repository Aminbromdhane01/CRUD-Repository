import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Inject,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create.book.dto';
import { GetBookDto } from './dto/get.book.dto';
import { Book } from './book.entity';
import { BOOK_SERVICE, IBookService } from './interface/book.service.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('books')
export class BookController {
  @Inject(BOOK_SERVICE) private readonly bookService: IBookService;
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async createBook(
    @Body() createBookDto: CreateBookDto,
    @UploadedFile('file') image: any,
  ): Promise<Book> {
    return await this.bookService.createBook(createBookDto, image);
  }

  @Get()
  async getAll(
    @Query() getBookDto: GetBookDto,
  ): Promise<{ data: Book[]; count: number }> {
    return await this.bookService.getAll(getBookDto);
  }
}
