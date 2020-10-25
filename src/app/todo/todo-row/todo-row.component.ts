import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoRowComponent implements OnInit {

    @Input() item: string;

    constructor() { }

    ngOnInit(): void {
    }

}
