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
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../user/user.repository.interface';

@Injectable()
export class BookService implements IBookService {
  @Inject(BOOK_REPOSITORY)
  private readonly bookRepository: IBookRepository;
  @Inject(USER_REPOSITORY)
  private readonly userRepository: IUserRepository;
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
  async addToWishlist(userId: number, bookId: number): Promise<any> {
    const user = await this.userRepository.findUseWishlist(userId);
    console.log(user);

    if (user.wishlist.some((book) => book.id === 14)) {
      console.log('book already added');
    }

    if (!user.wishlist.some((book) => book.id === 14)) {
      console.log('d5al l funct');

      const book = await this.bookRepository.findBookByID(14);
      if (book) {
        user.wishlist.push(book);
        const newUser = await this.userRepository.saveUser(user);
      }
    }
    const newUser = await this.userRepository.findUseWishlist(userId);
    return newUser;
  }
}
