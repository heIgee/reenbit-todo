import {Schema} from 'mongoose';
import {TaskDocument} from './task.document.js';
import {TaskStatus} from './task-status.enum.js';

const taskSchema = new Schema<TaskDocument>({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, enum: Object.values(TaskStatus), default: TaskStatus.Pending},
  createdAt: {type: Date, default: Date.now}
});

export {taskSchema};
