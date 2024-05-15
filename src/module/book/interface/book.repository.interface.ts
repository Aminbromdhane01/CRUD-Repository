import { Book } from '../book.entity';
import { CreateBookDto } from '../dto/create.book.dto';
import { GetBookDto } from '../dto/get.book.dto';

export const BOOK_REPOSITORY = 'BOOK_REPOSITORY';
export interface IBookRepository {
  createBook(book: CreateBookDto): Promise<Book>;
  getAll({
    itemPerPage,
    page,
    keyword,
  }: GetBookDto): Promise<{ data: Book[]; count: number }>;
  findBookByID(id: number): Promise<Book>;
}
