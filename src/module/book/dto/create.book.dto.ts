import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsDateString,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  rating: number;

  @IsNotEmpty()
  userId: number;
}
