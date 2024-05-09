import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
