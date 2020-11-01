import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoRowComponent } from './todo-row/todo-row.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { MaterialModule } from './../angular-material.module'

@NgModule({
  declarations: [TodoComponent, TodoRowComponent, TodoInputComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
