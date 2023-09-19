import { TaskStatus } from "../task.entity"
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength  } from 'class-validator'

export class createTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.DONE ,TaskStatus.PENDING])
    status?: TaskStatus
}