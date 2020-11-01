import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoRowComponent implements OnInit {

    @Input() todoItem: Todo;

    @Output() newItemEvent = new EventEmitter<string>();

    isAdded: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

}
