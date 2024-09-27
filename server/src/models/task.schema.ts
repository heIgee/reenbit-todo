import {Schema} from 'mongoose';
import {ITask} from './task.interface.js';
import {TaskStatus} from './task-status.enum.js';

const taskSchema = new Schema<ITask>({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, enum: Object.values(TaskStatus), default: TaskStatus.Pending},
  createdAt: {type: Date, default: Date.now}
});

export {taskSchema};
