import { TaskList } from './task-list';



export interface Task{
    name: string;
    created_at: Date;
    due_on: Date;
    status?: string;
    task_list: TaskList;
}