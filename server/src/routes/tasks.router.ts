import express from 'express';
import {tasksController} from '@/controllers/tasks.controller.js';
import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {UpdateTaskDto} from '@/dto/update-task.dto.js';
import {validateDto} from '@/middleware/validate-dto.middleware.js';
import {validateParamsId} from '@/middleware/validate-params-id.middleware.js';

const tasksRouter = express.Router();

tasksRouter
  .route('/')
  .get(tasksController.findAll)
  .post(validateDto(CreateTaskDto), tasksController.create);

tasksRouter
  .route('/:id')
  .all(validateParamsId)
  .get(tasksController.findById)
  .patch(validateDto(UpdateTaskDto), tasksController.update)
  .delete(tasksController.delete);

export {tasksRouter};
