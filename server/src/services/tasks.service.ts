import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {ITask} from '@/models/task.interface.js';
import {Task} from '@/models/task.model.js';
import {Document} from 'mongoose';

class TasksService {
  create(taskDto: CreateTaskDto): Promise<
    Document<unknown, {}, ITask> &
      ITask &
      Required<{
        _id: string;
      }>
  > {
    const task = new Task(taskDto);
    return task.save();
  }
}

const tasksService = new TasksService();

export {tasksService};
