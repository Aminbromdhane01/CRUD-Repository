import { Book } from 'src/module/book/book.entity';
import { User } from 'src/module/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @Column()
  userId: number;
  @Column()
  bookId: number;
  @ManyToOne(() => Book, (book) => book.comments)
  @JoinColumn()
  book: Book;
  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn()
  user: User;
}
