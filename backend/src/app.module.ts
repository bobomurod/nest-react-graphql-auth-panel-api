import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
