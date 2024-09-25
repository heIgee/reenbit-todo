import express from 'express';
import {tasksController} from '@/controllers/tasks.controller.js';
import {CreateTaskDto} from '@/dto/create-task.dto.js';
import {validateDto} from '@/middleware/validate-dto.middleware.js';

const tasksRouter = express.Router();

tasksRouter.post('/', validateDto(CreateTaskDto), tasksController.create /* serializer here */);

export {tasksRouter};
