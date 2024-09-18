// src/task/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: 'Pendiente' })
  status: 'Pendiente' | 'En progreso' | 'Completada';

  @ManyToOne(() => User, user => user.tasks)
  user: User;
}