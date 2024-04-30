import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from 'src/book/DTOs/create-book.dto';
import { UpdateBookDto } from 'src/book/DTOs/update-book.dto';
import { Book } from 'src/book/interfaces/book';
import { isEmpty } from 'lodash';
import { BookRepositorie } from '../repositories/book.repositorie';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
    private readonly repository: BookRepositorie,
  ) {}

  async findAll(): Promise<Book[]> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    const book = await this.repository.findOne(id);
    if (isEmpty(book)) {
      throw new HttpException('Livro não encontrado', HttpStatus.NOT_FOUND);
    }
    return book;
  }

  async create(createBookDto: CreateBookDto) {
    try {
      const createdBook = await this.repository.create(createBookDto);
      return createdBook;
    } catch (error) {
      throw new HttpException('Erro inesperado', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const book = await this.bookModel.findById(id).exec();
    if (isEmpty(book)) {
      throw new HttpException('Livro não encontrado', HttpStatus.NOT_FOUND);
    }
    try {
      await this.repository.update(id, updateBookDto);
      return book;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string) {
    const book = await this.bookModel.findOne({ _id: id }).exec();
    if (isEmpty(book)) {
      throw new HttpException('Livro não encontrado', HttpStatus.NOT_FOUND);
    }
    try {
      await this.repository.delete(id);
      return book;
    } catch (error) {
      throw new Error(error);
    }
  }
}
