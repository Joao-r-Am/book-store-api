import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/DTO/create-user.dto';
import { UserService } from 'src/users/service/user.service';
import { LoginDto } from '../DTO/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  private readonly genSalt = 10;

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    try {
      const user = await this.userService.findOne(loginDto.email);
      const isMatch = await bcrypt.compare(loginDto.password, user[0].password);
      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user[0]._id, email: user[0].email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(createUserDto: CreateUserDto) {
    try {
      const encryptedPass = await bcrypt.hash(
        createUserDto.password,
        this.genSalt,
      );
      const user: CreateUserDto = {
        cpf: createUserDto.cpf,
        email: createUserDto.email,
        name: createUserDto.name,
        password: (await encryptedPass).toString(),
        confirmPassword: (await encryptedPass).toString(),
      };
      const sign = await this.userService.createUser(user);
      return sign;
    } catch (error) {
      console.log(error);
    }
  }
}
