import { EventsService } from './events.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showdashboard = false;
  title = 'Task3';
  constructor( eventService:EventsService,
      private router: Router){
        
      }
      
   ngOnInit(){

   }
   
  
      
}
