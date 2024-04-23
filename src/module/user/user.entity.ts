import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  image: string;
  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
