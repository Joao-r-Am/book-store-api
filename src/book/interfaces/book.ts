export interface Book {
  name: string;
  genres: string[];
  author: string;
  pages: number;
  price: number;
  release_date: Date;
  quantity: number;
  codeISBN13: string;
  codeISBN10: string;
  synopsis: string;
  coverFile?: File | null;
  coverLink?: string | null;
  disponiblity: boolean;
}
