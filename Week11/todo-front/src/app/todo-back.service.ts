import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
// import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { TaskList } from './task-list';

@Injectable({
  providedIn: 'root'
})
export class TodoBackService {

  baseurl = 'http://localhost:8000/api/';
  // httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllTaskList(): Promise<any> {
    return this.http.get(this.baseurl + 'task_lists/', {}).toPromise().then(res => res);
  } 
  }
