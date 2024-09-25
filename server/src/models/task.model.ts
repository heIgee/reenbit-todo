import {model} from 'mongoose';
import {TaskDocument} from './task.document.js';
import {taskSchema} from './task.schema.js';

const Task = model<TaskDocument>('Task', taskSchema);

export {Task};
