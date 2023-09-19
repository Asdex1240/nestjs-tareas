import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { UpdateTaskDTO, createTaskDTO} from './dto/task.dto'
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

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.tasksService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDTO){
        return this.tasksService.updateTask(id, updateFields)
    }



}
