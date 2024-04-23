import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class GetBookDto {
  @IsNotEmpty()
  @IsNumber()
  itemPerPage: number;

  @IsNotEmpty()
  @IsNumber()
  page: number;

  @IsNotEmpty()
  @IsString()
  keyword: string;
}
