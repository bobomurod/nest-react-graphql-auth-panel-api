import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<UserDto> {
    return;
  }

  @Get()
  getAllUsers(): Promise<UserDto[]> {
    return;
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() body: UserUpdateDto,
  ): Promise<UserDto> {
    return this.userService.updateSingle(id, body);
  }
}
