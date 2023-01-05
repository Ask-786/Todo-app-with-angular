import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos: Todos[] = [];

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
