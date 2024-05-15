import { Inject, Injectable } from '@nestjs/common';
import { CRUDRepositoty } from '../generic-crud-repository/generic-crud-repository.service';
import { Book } from './book.entity';
import { IBookRepository } from './interface/book.repository.interface';
import { CreateBookDto } from './dto/create.book.dto';
import { DataSource } from 'typeorm';
import { GetBookDto } from './dto/get.book.dto';

@Injectable()
export class BookReposotiroy
  extends CRUDRepositoty<Book>
  implements IBookRepository
{
  constructor(@Inject(DataSource) private readonly datasource: DataSource) {
    super(Book, datasource);
  }
  createBook(book: CreateBookDto): Promise<Book> {
    return this.createItem('Book', book);
  }
  getAll({
    itemPerPage,
    page,
    keyword,
  }: GetBookDto): Promise<{ data: Book[]; count: number }> {
    return this.findAll('Book', {
      itemsPerPage: itemPerPage,
      page: page,
      keyword: keyword,
    });
  }
  findBookByID(id: number): Promise<Book> {
    return this.findById('Book', id);
  }
}
