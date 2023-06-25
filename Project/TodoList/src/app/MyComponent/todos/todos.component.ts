import { Component,OnInit  } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] | undefined;
  constructor(){
     this.todos=[
      {
        sno:1,
        title:"This is Ttle",
        desc:"description",
        active:true
      },
      {
        sno:2,
        title:"This is Ttle2",
        desc:"description",
        active:true
      },
      {
        sno:3,
        title:"This is Ttle3",
        desc:"description",
        active:true
      }

     ]
  }
  ngOnInit():void{

  }

}
