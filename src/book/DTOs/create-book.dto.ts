import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsArray,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  genres: string[];

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  pages: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsDateString()
  release_date: Date;
}
