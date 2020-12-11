import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      ConfigModule.forRoot(),
      UsersModule,
      MongooseModule.forRoot()
    GraphQLModule.forRoot({
      autoSchemaFile: true,
  }),
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
