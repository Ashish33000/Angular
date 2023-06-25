import { Component,OnInit,Input } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  constructor(){

  }
  ngOnInit(): void {

  }

}
