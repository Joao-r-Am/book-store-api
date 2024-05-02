import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { File } from 'buffer';
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
  genres: string[];
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
  @Prop({
    type: Number,
    required: true,
  })
  quantity: number;
  @Prop({
    type: String,
    required: true,
  })
  codeISBN13: string;
  @Prop({
    type: String,
    required: true,
  })
  codeISBN10: string;
  @Prop({
    type: String,
    required: true,
  })
  synopsis: string;
  // @Prop({
  //   type: File,
  //   required: false,
  // })
  // coverFile?: File | null;
  @Prop({
    type: String,
    required: false,
  })
  coverLink?: string | null;
  @Prop({
    type: Boolean,
    required: true,
  })
  disponiblity: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
