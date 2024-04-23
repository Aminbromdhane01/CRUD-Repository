import { DataSource } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { IUserRepository } from './user.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { CRUDRepositoty } from '../generic-crud-repository/generic-crud-repository.service';
import {
  CRUD_REPOSITORY,
  ICRUDRepositoty,
} from '../generic-crud-repository/generic-crud-repository.service.interface';
@Injectable()
export class UserReposotiroy
  extends CRUDRepositoty<User>
  implements IUserRepository
{
  constructor(
    @Inject(DataSource) private readonly datasource: DataSource,
    @Inject(CRUD_REPOSITORY)
    private readonly crudRepository: ICRUDRepositoty<User>,
  ) {
    super(User, datasource);
  }

  async createUser(user: UserDto): Promise<User> {
    return this.createItem('user', user);
  }
  async getAll(): Promise<{ data: User[]; count: number }> {
    return this.findAll('User', { itemsPerPage: 4, page: 1, keyword: 'key' });
  }
  async getUserbyid(id: number): Promise<User> {
    return this.findById('User', id);
  }
}
