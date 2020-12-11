import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
        @Get(':id')
        getUserById(@Param('id') id: string): Promise<> {
            return ''
        }

        @Get()
        getAllUsers(): Promise<User[]> {
            return;
        }

        @Post()
        createUser(@Body() body: CreateUserDto): Promise<User> {
            return this.userService.create(body)
        }

        @Put(':id')
        updateUser(@Param('id') id: string, @Body() body: Body): Promise<User> {
            return this.userService.updateUser()
        }
    }
}
