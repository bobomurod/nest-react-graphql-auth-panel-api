import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './modules/todos/todos.controller';
import { TodosService } from './modules/todos/todos.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?${process.env.DATABASE_OPTION}`,
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
