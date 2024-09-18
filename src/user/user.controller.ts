// src/user/user.controller.ts
import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() body: Partial<User>): Promise<User> {
    return await this.userService.create(body);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: Partial<User>): Promise<User> {
    return await this.userService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.userService.remove(id);
  }
}