import { Component, OnInit , Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
}) 

export class ServerElementComponent implements OnInit , OnChanges{
 
 @Input('srvelement')  element!: { type:string, name:string, content:string};
 @Input() name!:string
  constructor() {
    console.log('Constructor Called')
   }
   ngOnChanges(changes:SimpleChanges){
     console.log("ngOnChanges called",changes)
   }

  ngOnInit(){
    console.log('ngOnInit called')
  }

}
