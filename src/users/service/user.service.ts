import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../interface/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../DTO/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

  async findOne(email: string) {
    try {
      const username = await this.userModel.find({ email: email });
      return username;
    } catch (error) {
      throw new HttpException('Erro inesperado', HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByCpf(cpf: string) {
    try {
      const userCpf = await this.userModel.find({ cpf: cpf });
      return userCpf;
    } catch (error) {
      throw new HttpException('Erro inesperado', HttpStatus.BAD_REQUEST);
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const create = await this.userModel.create(createUserDto);
      return create;
    } catch (error) {
      throw new HttpException('Erro inesperado', HttpStatus.BAD_REQUEST);
    }
  }
}
