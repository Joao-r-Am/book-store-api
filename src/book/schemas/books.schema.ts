import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({
    type: String,
    required: true,
  })
  name: string;
  @Prop({
    type: Array<String>,
    required: true,
  })
  genre: string[];
  @Prop({
    type: String,
    required: true,
  })
  author: string;
  @Prop({
    type: Number,
    required: true,
  })
  pages: number;
  @Prop({
    type: Number,
    required: true,
  })
  price: number;
  @Prop({
    type: Date,
    required: true,
  })
  release_date: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
