import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/users/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './modules/todos/todos.controller';
import { TodosService } from './modules/todos/todos.service';
import { AuthController } from './modules/auth/auth.controller';
import { UserService } from './modules/users/user.service';
import {User} from "./modules/users/schemas/user.schema";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    AdminModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?${process.env.DATABASE_OPTION}`,
    ),
  ],
  controllers: [AppController, TodosController, AuthController],
  providers: [AppService, TodosService, UserService, User],
})
export class AppModule {}
