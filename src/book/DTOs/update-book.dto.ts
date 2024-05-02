import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
  IsUrl,
} from 'class-validator';
import { IsFile } from '../../validator/IsFile';
import { File } from 'buffer';
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

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  codeISBN13: string;

  @IsNotEmpty()
  @IsString()
  codeISBN10: string;

  @IsNotEmpty()
  @IsString()
  synopsis: string;

  // @IsFile({ mime: ['image/jpg', 'image/png', 'image/jpeg'] })
  // coverFile?: File | null;

  @IsUrl()
  coverLink?: string | null;

  @IsNotEmpty()
  @IsBoolean()
  disponiblity: boolean;
}
