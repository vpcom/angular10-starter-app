import { Todo } from '../todo/todo';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent implements OnInit {

    todoList$: Observable<Todo[]>;

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {

        // this.todoService.setTodoList([{
        //     id: 0,
        //     name: 'test'
        // }]);

        this.todoList$ = this.todoService.getTodoList();

    }




}
