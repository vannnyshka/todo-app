import { Component, OnInit, setTestabilityGetter } from '@angular/core';
//import { title } from 'process';
import { TodoService } from 'src/app/services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]=[];
  constructor(private todosServise : TodoService) { }

  ngOnInit(): void {
      this.todosServise.getTodos().subscribe(todos => {
        this.todos = todos;
      });
    }

  onChangeCompleted(todo : Todo){
    console.log('it works');
    console.log(todo);
    todo.completed = !todo.completed;
    //this.todos.push(todo);
  }

  onDeleteCompleted(todo : Todo){
    console.log('it works');
    console.log(todo);
    this.todos.splice(this.todos.indexOf(todo),1);
    this.todosServise.deleteTodo(todo.id);
  }

  onAddedCompleted(title : string){
    let new_todo: Todo={
      id: this.todos.length,
      title: title,
      completed: false
    }
    this.todos.push(new_todo);
    this.todosServise.addTodo(new_todo.id,new_todo.title,new_todo.completed)
  }

}
