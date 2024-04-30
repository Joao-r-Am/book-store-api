import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Req,
  Put,
  Delete,
  HttpStatus,
  Res,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { isEmpty } from 'lodash';
import { ObjectId, isValidObjectId } from 'mongoose';
import { CreateBookDto } from 'src/book/DTOs/create-book.dto';
import { UpdateBookDto } from 'src/book/DTOs/update-book.dto';
import { Book } from 'src/book/interfaces/book';
import { BookRepositorie } from 'src/book/providers/repositories/book.repositorie';
import { BookService } from 'src/book/providers/services/book.service';

@Controller('books')
export class BooksController {
  constructor(
    private service: BookService,
    private repository: BookRepositorie,
  ) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException('Livro inválido', HttpStatus.BAD_REQUEST);
    }
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const checkBookExists = await this.repository.findByName(
      createBookDto.name,
    );
    if (!isEmpty(checkBookExists)) {
      throw new HttpException('Livro ja existente', HttpStatus.BAD_REQUEST);
    }
    this.service.create(createBookDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    if (!isValidObjectId(id)) {
      throw new HttpException('Livro inválido', HttpStatus.BAD_REQUEST);
    }
    return this.service.update(id, updateBookDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException('Livro inválido', HttpStatus.BAD_REQUEST);
    }
    return this.service.delete(id);
  }
}
