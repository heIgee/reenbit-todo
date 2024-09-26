import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {UpdateTaskDto} from '@/dto/update-task.dto.js';
import {TaskDocument} from '@/models/task.document.js';
import {Task} from '@/models/task.model.js';
import {AppError} from '@/utils/app-error.js';

class TasksService {
  async findAll(): Promise<TaskDocument[]> {
    return Task.find();
  }

  async create(taskDto: CreateTaskDto): Promise<TaskDocument> {
    const task = new Task(taskDto);
    return task.save();
  }

  async update(id: string, taskDto: UpdateTaskDto): Promise<TaskDocument> {
    const task = await Task.findById(id);
    if (!task) throw new AppError(404, `Task with id: ${id} is not found`);
    Object.assign(task, taskDto);
    return task.save();
  }

  async delete(id: string): Promise<TaskDocument> {
    const task = await Task.findById(id);
    if (!task) throw new AppError(404, `Task with id: ${id} is not found`);
    await task.deleteOne();
    return task;
  }
}

const tasksService = new TasksService();

export {tasksService};
