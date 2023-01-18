import { Injectable } from '@angular/core';
import { Todos } from 'src/app/model/Todos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.apiUrl);
  }

  deleteTodo(todo: Todos): Observable<Todos> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todos>(url);
  }

  toggleReminder(todo: Todos): Observable<Todos> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todos>(url, todo, httpOptions);
  }

  addTodo(todo: Todos) {
    return this.http.post<Todos>(this.apiUrl, todo, httpOptions);
  }
}
