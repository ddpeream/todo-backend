// src/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task/entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(taskData: Partial<Task>): Promise<Task> {
    const task = this.tasksRepository.create(taskData);
    return this.tasksRepository.save(task);
  }

  async findAll(userId: string): Promise<Task[]> {
    
    const tasks = await this.tasksRepository.createQueryBuilder('task')
      .innerJoinAndSelect('task.user', 'user')
      .where('user.id = :userId', { userId })
      .getMany();

    return tasks;
  }

  async findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOneBy({ id });
  }

  async update(id: string, updateData: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tasksRepository.delete(id);
  }

  async updateStatus(taskId: string, userId: string, status: 'Pendiente' | 'En progreso' | 'Completada'): Promise<Task> {
    const task = await this.tasksRepository.createQueryBuilder('task')
      .innerJoinAndSelect('task.user', 'user')
      .where('task.id = :taskId', { taskId })
      .andWhere('user.id = :userId', { userId })
      .getOne();

    if (!task) {
      throw new Error('Task not found or does not belong to the user');
    }

    task.status = status;
    return this.tasksRepository.save(task);
  }
}