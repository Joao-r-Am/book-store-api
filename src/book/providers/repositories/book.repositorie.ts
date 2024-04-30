import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { CreateBookDto } from 'src/book/DTOs/create-book.dto';
import { Book } from 'src/book/interfaces/book';
import { isEmpty } from 'lodash';
import { UpdateBookDto } from 'src/book/DTOs/update-book.dto';

@Injectable()
export class BookRepositorie {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async findByName(name: string) {
    return await this.bookModel.findOne({ name: name }).exec();
  }

  async findAll() {
    return await this.bookModel.find().exec();
  }

  async findOne(id: string) {
    return await this.bookModel.findOne({ _id: id }).exec();
  }

  async create(createBookDto: CreateBookDto) {
    await new this.bookModel(createBookDto).save();
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    await this.bookModel.findByIdAndUpdate({ _id: id }, updateBookDto);
  }

  async delete(id: string) {
    await this.bookModel.findByIdAndDelete({ _id: id }).exec();
  }
}
