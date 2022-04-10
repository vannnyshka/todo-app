import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application.json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'api/todos';

/*getTodos(): Todo[] {
  return this.todos;
}*/
getTodos(): Observable<Todo[]> {
  return this.http.get<Todo[]>(
    `${this.todosUrl}`
  );
}

deleteTodo(index:number){
  this.http.delete<Todo[]>(
    `${this.todosUrl}${index}`, httpOptions
  )
}

addTodo(index: number, title: string, comp: boolean){
  this.http.get<Todo>(
    `${this.todosUrl}${index}`, httpOptions
  )
}

  constructor(private http : HttpClient) {}
}
