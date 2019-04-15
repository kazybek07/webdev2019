import { Component, OnInit } from '@angular/core';
import { TaskList } from '../task-list';
import { Task } from '../task';
import { TodoBackService } from '../todo-back.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  taskList: TaskList;
  selectedTask: Task;

  constructor(private todoBack: TodoBackService) { }

  ngOnInit() {
    // const a = this.todoBack.getTasks();
  }

}
