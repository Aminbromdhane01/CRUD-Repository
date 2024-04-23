import { Inject, Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import {
  BOOK_REPOSITORY,
  IBookRepository,
} from './interface/book.repository.interface';
import { CreateBookDto } from './dto/create.book.dto';
import { GetBookDto } from './dto/get.book.dto';
import { IBookService } from './interface/book.service.interface';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class BookService implements IBookService {
  @Inject(BOOK_REPOSITORY)
  private readonly bookRepository: IBookRepository;
  @Inject()
  private readonly cloudinarService: CloudinaryService;
  async createBook(book: CreateBookDto, content: any): Promise<Book> {
    const { url } = await this.cloudinarService.uploadFile(content);
    console.log(url);

    book.content = url;
    return await this.bookRepository.createBook(book);
  }
  async getAll({
    itemPerPage,
    page,
    keyword,
  }: GetBookDto): Promise<{ data: Book[]; count: number }> {
    return await this.bookRepository.getAll({
      itemPerPage: itemPerPage,
      page: page,
      keyword: keyword,
    });
  }
}
