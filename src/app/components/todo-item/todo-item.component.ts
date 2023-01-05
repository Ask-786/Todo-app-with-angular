import { Component, Input } from '@angular/core';
import { Todos } from 'src/app/Todos';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todos;
  faTimes = faTimes;
}