import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/model/Todos';
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

  deleteTodo(todo: Todos) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  toggleReminder(todo: Todos) {
    todo.reminder = !todo.reminder;
    this.todoService.toggleReminder(todo).subscribe();
  }

  addTodo(todo: Todos) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.unshift(todo);
    });
  }
}
