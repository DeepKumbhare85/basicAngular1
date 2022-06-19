import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blogg';
  today=Date()

  // data and function for passing data from parent to child

  userDetails=[
    {name:'Deep',email:'kumbharedeep85@gmail.com'},
    {name:'anil',email:'anilpatel@gmail.com'},
    {name:'Sanket',email:'sanketvaghani@gmail.com'},
  ];
  // newData=10;
  // updateChild(){
  //   this.newData=Math.floor(Math.random()*10)
  // }

  data='x';
  updateData(item:string){
    console.warn(item)
    this.data=item;
  }



}
