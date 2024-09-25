import {RequestHandler} from 'express';
import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {UpdateTaskDto} from '@/dto/update-task.dto.js';
import {tasksService} from '@/services/tasks.service.js';

class TasksController {
  create: RequestHandler = async (req, res) => {
    const task = await tasksService.create(req.body as CreateTaskDto);
    res.status(201).send(task);
  };
  update: RequestHandler = async (req, res, next) => {
    try {
      const task = await tasksService.update(req.params.id, req.body as UpdateTaskDto);
      res.status(200).send(task);
    } catch (err) {
      next(err);
    }
  };
}

const tasksController = new TasksController();

export {tasksController};
