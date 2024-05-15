import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/entities/comment.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  image: string;
  @Column()
  date: Date;
  @Column()
  genre: string;
  @Column({ default: 0 })
  rating: number;
  @Column()
  userId: number;
  @ManyToOne(() => User, (user) => user.books)
  @JoinColumn()
  user: User;
  @ManyToMany(() => User, (user) => user.wishlist)
  wishlistOwners: User[];
  @OneToMany(() => Comment, (comment) => comment.book)
  comments: Comment[];
}
