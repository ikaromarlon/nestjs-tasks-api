import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async create(@Body() data: CreateTaskDto) {
    try {
      return this.tasksService.create(data);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id);
    if (!task) throw new NotFoundException('Task does not exist!');
    return task;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    const task = await this.tasksService.update(id, body);
    if (!task) throw new NotFoundException('Task does not exist!');
    return task;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.tasksService.delete(id);
    if (!task) throw new NotFoundException('Task does not exist!');
    return task;
  }
}
