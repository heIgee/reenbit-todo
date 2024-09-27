import {model} from 'mongoose';
import {ITask} from './task.interface.js';
import {taskSchema} from './task.schema.js';

const Task = model<ITask>('Task', taskSchema);

export {Task};
