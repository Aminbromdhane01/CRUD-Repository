import { UserDto } from "./dto/user.dto";
import { User } from "./user.entity";

export const USER_SERVIVE = 'USER_SERVIVE';
export interface IUserService {
    createUser(image: any, user: UserDto): Promise<User>
    findAll(): Promise<{ data: User[]; count: number; }>
    deletephoto(publicId: string): Promise<any>
}