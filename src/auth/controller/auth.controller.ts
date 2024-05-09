import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from 'src/users/DTO/create-user.dto';
import { LoginDto } from '../DTO/login.dto';
import { AuthGuard } from '../auth.guard';
import { UserService } from 'src/users/service/user.service';
import { isEmpty } from 'lodash';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    try {
      return this.authService.login(loginDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('sign')
  async signIn(@Body() createUserDto: CreateUserDto) {
    const checkUserExist = await this.userService.findOneByCpf(
      createUserDto.cpf,
    );
    if (!isEmpty(checkUserExist)) {
      throw new HttpException('Este usuário já existe', HttpStatus.BAD_REQUEST);
    }
    try {
      return this.authService.signIn(createUserDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
