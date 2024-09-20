// src/task/task.controller.ts
import { Controller, Post, Get, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  async create(@Body() body: Partial<Task>): Promise<Task> {
    return await this.taskService.create(body);
  }

  @Get('all/:userId')
  async findAll(@Param('userId') userId: string): Promise<Task[]> {
    return await this.taskService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return await this.taskService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Partial<Task>): Promise<Task> {
    return await this.taskService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.taskService.remove(id);
  }

  @Patch(':taskId/status')
  async updateStatus(
    @Param('taskId') taskId: string,
    @Body('userId') userId: string,
    @Body('status') status: 'Pendiente' | 'En progreso' | 'Completada',
  ): Promise<Task> {
    return await this.taskService.updateStatus(taskId, userId, status);
  }
}