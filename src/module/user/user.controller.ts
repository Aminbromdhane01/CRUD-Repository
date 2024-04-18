import { Body, Controller, Get, Inject, Injectable, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { IUserService, USER_SERVIVE } from "./user.service.interface";
import { UserDto } from "./dto/user.dto";
import { User } from "./user.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
interface publicId {
    publicId: string
}


@Controller('user')
@Injectable()
export class UserController {
    @Inject(USER_SERVIVE) private readonly userService: IUserService;

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async createUser(@Body() user: UserDto, @UploadedFile() image: any): Promise<User> {
        return await this.userService.createUser(image, user)
    }
    @Get()
    async findAllUsers(): Promise<{ data: User[]; count: number; }> {
        return await this.userService.findAll()
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads'
            , filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }
    @Post('delete-image')
    deleteImage(@Body() { publicId }: publicId) {
        this.userService.deletephoto(publicId)
    }



}