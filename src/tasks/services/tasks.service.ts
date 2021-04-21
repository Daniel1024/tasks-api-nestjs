import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>
  ) { }

  findAll(): Promise<TaskEntity[]> {
    return this.taskRepo.find();
  }

  findOne(id: number): Promise<TaskEntity> {
    return this.taskRepo.findOne({ id });
  }

  create(body: any): Promise<TaskEntity[]> {
    const newTask = this.taskRepo.create(body);

    return this.taskRepo.save(newTask);
  }

  async update(id: number, body: any): Promise<TaskEntity> {
    const task = await this.findOne(id);
    this.taskRepo.merge(task, body);

    return this.taskRepo.save(task);
  }

  async delete(id: number): Promise<boolean> {
    await this.taskRepo.delete(id);

    return true;
  }
}
