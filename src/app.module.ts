import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CRUDRepositotyModule } from './module/generic-crud-repository/generic-crud-repository.module';
import { UserModule } from './module/user/user.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
    imports: [
        MulterModule.register({
            dest: './uploads'
        }

        ),
        TypeOrmModule.forRoot(

            {
                type: 'mysql',
                database: 'cloudinary',
                port: 3306,
                host: 'localhost',
                username: 'root',
                password: '',
                entities: ['dist/**/*.entity.js'],
                synchronize: true
            },
        ), UserModule
    ],

})
export class AppModule { }