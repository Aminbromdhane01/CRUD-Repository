import { Inject } from '@nestjs/common';
import { CRUDRepositoty } from '../generic-crud-repository/generic-crud-repository.service';
import { Comment } from './entities/comment.entity';
import { DataSource } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';

export class CommentRepository extends CRUDRepositoty<Comment> {
  constructor(@Inject(DataSource) private readonly datasource: DataSource) {
    super(Comment, datasource);
  }

  async psotComment(commentDto: CreateCommentDto): Promise<Comment> {
    return this.createItem('Comment', commentDto);
  }
}
