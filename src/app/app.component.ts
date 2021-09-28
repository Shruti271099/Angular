import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fifth-Data-Binding';
  serverElements = [{type:'server', name:'my name is server',content:'This is content'}];
  

  
}
