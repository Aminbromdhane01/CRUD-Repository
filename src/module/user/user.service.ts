import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { IUserService } from './user.service.interface';

import { UserDto } from './dto/user.dto';
import { IUserRepository, USER_REPOSITORY } from './user.repository.interface';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
@Injectable()
export class UserService implements IUserService {
  @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository;
  @Inject() private readonly CloudinaryService: CloudinaryService;
  async deletephoto(publicId: string): Promise<any> {
    return this.CloudinaryService.deleteFileByUrl(publicId);
  }

  async createUser(image: any, user: UserDto): Promise<User> {
    const { url } = await this.CloudinaryService.uploadFile(image);
    console.log(url);
    user.image = url;
    return this.userRepository.createUser(user);
  }
  findAll(): Promise<{ data: User[]; count: number }> {
    return this.userRepository.getAll();
  }
  finfbyid(id: number): Promise<User> {
    return this.userRepository.getUserbyid(id);
  }
}
