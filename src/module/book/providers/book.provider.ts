import { Provider } from '@nestjs/common';
import { BOOK_SERVICE } from '../interface/book.service.interface';
import { BookService } from '../book.service';
import { BOOK_REPOSITORY } from '../interface/book.repository.interface';
import { BookReposotiroy } from '../book.repository';

const BookProviders: Provider[] = [
  {
    provide: BOOK_SERVICE,
    useClass: BookService,
  },
  {
    provide: BOOK_REPOSITORY,
    useClass: BookReposotiroy,
  },
];

export { BookProviders };
