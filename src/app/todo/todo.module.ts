import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoRowComponent } from './todo-row/todo-row.component';

@NgModule({
  declarations: [TodoComponent, TodoRowComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
