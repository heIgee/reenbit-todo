import {Document} from 'mongoose';
import {TaskStatus} from './task-status.enum.js';

export interface ITask extends Document<string> {
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}
