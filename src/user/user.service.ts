// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Crear un nuevo usuario
  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Obtener un usuario por ID
  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  // Actualizar un usuario por ID
  async update(id: number, updateData: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, updateData);
    return this.findOne(id);
  }

  // Eliminar un usuario por ID
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  // Buscar un usuario por email
  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
}