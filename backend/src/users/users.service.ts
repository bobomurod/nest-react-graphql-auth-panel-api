import {Delete, Get, Injectable, Post, Put} from '@nestjs/common';

@Injectable()
export class UsersService {
    @Post
    async create(): Promise<> {
        return
    }

    @Get
    async getUSerById(): Promise<> {
        return
    }

    @Get
    async getAllUsers(): Promise<> {
        return
    }

    @Put
    async updateUser(): Promise<> {
        return
    }

    @Delete
    async removeUser(): Promise<> {
        return
    }
}
