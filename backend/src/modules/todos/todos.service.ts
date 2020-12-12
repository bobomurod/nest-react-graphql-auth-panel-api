import { Injectable } from '@nestjs/common';
import { CreateTodosDto } from './dto/create-todos.dto';

@Injectable()
export class TodosService {
  constructor() {}

  async getAll() {
    return 'Get all';
  }

  async getOne(id: string) {
    return 'get one by id';
  }

  async create(createTodo: CreateTodosDto) {
    return 'create';
  }

  async update(id: string) {
    return 'updated';
  }

  async remove(id: string) {
    return 'removed';
  }
}
