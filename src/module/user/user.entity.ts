import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Book } from '../book/book.entity';
import { Comment } from '../comment/entities/comment.entity';

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
  @ManyToMany(() => Book, (book) => book.wishlistOwners)
  @JoinTable()
  wishlist: Book[];
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
