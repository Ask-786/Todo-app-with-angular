import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'ToDo';
  showAddTask: boolean = false;
  subscrption!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscrption = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTodo() {
    this.uiService.toggleAddTodo();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
