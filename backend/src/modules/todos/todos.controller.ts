import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodosDto } from './dto/create-todos.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Promise<any> {
    return this.todosService.getAll();
  }

  @Get()
  getOne(@Param('id') id: string): Promise<any> {
    return this.todosService.getOne(id);
  }

  @Post()
  create(@Body() createTodo: CreateTodosDto): Promise<any> {
    return this.todosService.create(createTodo);
  }

  @Put()
  update(@Param('id') id: string): Promise<any> {
    return this.todosService.update(id);
  }

  @Delete()
  remove(@Param('id') id: string): Promise<any> {
    return this.todosService.remove(id);
  }
}
