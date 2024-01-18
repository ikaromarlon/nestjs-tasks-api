import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/Task.schema';
import { CreateTaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task> ) {}

  async create(createTask: CreateTaskDto) {
    const task = new this.taskModel(createTask)
    return task.save()
  }
}
