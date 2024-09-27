import {IsEnum, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {TaskStatus} from '@/models/task-status.enum.js';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status?: TaskStatus;
}
