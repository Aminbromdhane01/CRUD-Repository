import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
export const USER_REPOSITORY = 'USER_REPOSITORY';
export interface IUserRepository {
  createUser(user: UserDto): Promise<User>;
  getAll(): Promise<{ data: User[]; count: number }>;
  getUserbyid(id: number): Promise<User>;
}
