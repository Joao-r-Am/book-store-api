import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/books.schema';
import { BookService } from './providers/services/book.service';
import { BookRepositorie } from './providers/repositories/book.repositorie';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BookService, BookRepositorie],
})
export class BookModule {}
