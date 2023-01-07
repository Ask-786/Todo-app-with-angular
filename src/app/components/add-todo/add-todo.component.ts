import { Component, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/Todos';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<Todos> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTodo: boolean = false;
  subscrption!: Subscription;

  constructor(private uiService: UiService) {
    this.subscrption = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

  onSubmit() {
    if (!this.text) return alert('Text is Mandatory to Submit');
    if (!this.day) return alert('Day is Mandatory to Submit');

    const newTodo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTodo.emit(newTodo);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
