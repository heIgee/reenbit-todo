import {RequestHandler} from 'express';
import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {tasksService} from '@/services/tasks.service.js';

class TasksController {
  create: RequestHandler = async (req, res) => {
    const task = await tasksService.create(req.body as CreateTaskDto);
    res.status(201).send(task);
  };
}

const tasksController = new TasksController();

export {tasksController};
