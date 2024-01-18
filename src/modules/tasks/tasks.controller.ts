import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  async create(@Body() createTask: CreateTaskDto) {
    return this.taskService.create(createTask);
  }

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }
}
