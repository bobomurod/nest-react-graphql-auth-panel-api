import {Controller, Get, Injectable, Param} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
        @Get
        getUserById(@Param(':id')){
            return
        }
    }
}
