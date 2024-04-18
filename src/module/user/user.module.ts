import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserProviders } from './providers/user.provider';
import { USER_SERVIVE } from './user.service.interface';
import { CRUDRepositotyModule } from '../generic-crud-repository/generic-crud-repository.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
    imports: [CRUDRepositotyModule, CloudinaryModule],
    controllers: [UserController],
    providers: [...UserProviders],
    exports: [USER_SERVIVE]

})
export class UserModule { }