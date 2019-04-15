import { Component, OnInit } from '@angular/core';
import { TodoBackService } from './todo-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoBackService]
})
export class AppComponent implements OnInit {
  title = 'todo-front';
  taskList = [];

  constructor(private todoBack: TodoBackService) {
  
  }

  ngOnInit() {
    this.todoBack.getAllTaskList().then(res => {
      this.taskList = res;
      console.log(res);
    });
  }
  
  taskListClicked = () => {
     console.log(this.taskList)
  }
}
