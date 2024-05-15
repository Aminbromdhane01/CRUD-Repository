import { Book } from '../book.entity';
import { CreateBookDto } from '../dto/create.book.dto';
import { GetBookDto } from '../dto/get.book.dto';

export const BOOK_SERVICE = 'BOOK_SERVICE';
export interface IBookService {
  createBook(user: CreateBookDto, content: any): Promise<Book>;
  getAll({
    itemPerPage,
    page,
    keyword,
  }: GetBookDto): Promise<{ data: Book[]; count: number }>;
  addToWishlist(userId: number, bookId: number): Promise<any>;
}
