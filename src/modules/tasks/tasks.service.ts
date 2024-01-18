import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/Task.schema';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTask: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTask);
    return task.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id)
  }

  async update(id: string, updateTask: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateTask, { new: true })
  }
}
