import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { map } from 'rxjs/operators';
import { Todo } from '../todo/todo';


@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private localStorageService: LocalStorageService) { }

    public getTodoList(): Observable<Todo[]> {
        return this.localStorageService.getCache().pipe(
            // tap(data => { console.log(data) }),
            map(cachedData => cachedData)
        );
    }

    public setTodoList(todoList: Todo[]): Observable<Todo[]> {
        return this.localStorageService.setCache(todoList).pipe(
            // tap(data => { console.log(data) }),
            map(cachedData => cachedData)
        );
    }

}
