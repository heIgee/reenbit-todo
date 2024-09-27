import express from 'express';
import {tasksController} from '@/controllers/tasks.controller.js';
import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {UpdateTaskDto} from '@/dto/update-task.dto.js';
import {validateDto} from '@/middleware/validate-dto.middleware.js';

const tasksRouter = express.Router();

tasksRouter.post('/', validateDto(CreateTaskDto), tasksController.create /* serializer here */);

tasksRouter.patch('/:id', validateDto(UpdateTaskDto), tasksController.update);

export {tasksRouter};
