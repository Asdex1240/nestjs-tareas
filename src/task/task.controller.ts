import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDTO} from './dto/task.dto'
@Controller('task')
export class TaskController {

    constructor(private tasksService: TaskService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: createTaskDTO){
        return this.tasksService.createTask(newTask.title, newTask.description);
    }
}
