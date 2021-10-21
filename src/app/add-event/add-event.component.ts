import { EventsService } from './../events.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addEventForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute,
    private eventService:EventsService
    ) {
      

     }

  ngOnInit(): void {
    var id = this.route.snapshot.queryParamMap.get('id');
   var User =  this.route.snapshot.queryParamMap.get('userName');
   console.log(User)
   var EventDesc = this.route.snapshot.queryParamMap.get('userDesc');
   
  
    
    var storelocal = JSON.parse(localStorage.getItem('ClickData') ||  '{}');
    const userDetails = JSON.parse(localStorage.getItem('userEmail') ||  '{}');
   var storeName =  storelocal.name;
   var storeDesc = storelocal.description
    this.addEventForm = this.formBuilder.group({
      'name': new FormControl(User,Validators.required),
      'description': new FormControl( EventDesc,Validators.required),
      'userId': userDetails.id
     
    })
  }
  fillData(){
    var User =  this.route.snapshot.queryParamMap.get('id');
   console.log(User)
    this.http.get<any>('http://localhost:3000/EventPlan').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.id === User
          );
         
        });
  })
}
  
  onCreateEvent(){
    
  this.http.post('http://localhost:3000/EventPlan',this.addEventForm.value)
  .subscribe(response => {
    alert('Event Added Successful');
    this.addEventForm.reset();
    this.router.navigate(['dashboard']);
  }, err => {
      alert("Error Occcured")

  })  
  
}


}
