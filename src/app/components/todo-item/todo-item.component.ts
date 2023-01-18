import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/model/Todos';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todos;
  @Output() onDeleteTodo: EventEmitter<Todos> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todos> = new EventEmitter();
  faTimes = faTimes;

  onDelete(todo: Todos) {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todos) {
    this.onToggleReminder.emit(todo);
  }
}
