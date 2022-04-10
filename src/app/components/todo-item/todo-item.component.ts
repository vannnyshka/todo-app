import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() 
  todo: Todo={
    id: 0,
    title:'',
    completed: false
  };

  @Output() onCheckboxToggle: EventEmitter<Todo> = new EventEmitter();
  @Output() onDelDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    const classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo): void {
    this.onCheckboxToggle.emit(todo);
  }

  onDelete(todo: Todo): void{
    this.onDelDelete.emit(todo)
  }

}
