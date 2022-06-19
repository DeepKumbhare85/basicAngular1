import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
  @Output() updateDataEvent =new EventEmitter<string>();
  constructor() { }
  // @Input() item=0;
  // @Input() useritem:{name:string,email:string}={name:'',email:''};
  ngOnInit(): void {
  }

}
