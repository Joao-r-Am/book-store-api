import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './book/controllers/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book/schemas/books.schema';
import { BookService } from './book/providers/services/book.service';
import { BookRepositorie } from './book/providers/repositories/book.repositorie';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://joaoamorim:xxoH0N3bwE1uqIrh@books-api-cluster.fdv24mc.mongodb.net/',
    ),
    BookModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
