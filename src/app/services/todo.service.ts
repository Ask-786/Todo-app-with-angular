import { Injectable } from '@angular/core';
import { Todos } from 'src/app/Todos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.apiUrl);
  }
}
