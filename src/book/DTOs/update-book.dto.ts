import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class UpdateBookDto {
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
