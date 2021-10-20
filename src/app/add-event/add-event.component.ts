import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addEventForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router) {

     }

  ngOnInit(): void {
    var storelocal = JSON.parse(localStorage.getItem('ClickData') ||  '{}');
    const userDetails = JSON.parse(localStorage.getItem('userEmail') ||  '{}');
   var storeName =  storelocal.name;
   var storeDesc = storelocal.description
    this.addEventForm = this.formBuilder.group({
      'name': new FormControl(storeName? storeName : ''),
      'description': new FormControl(storeDesc? storeDesc : ''),
      'userId': userDetails.id
     
    })
  }
  onCreateEvent(){

    console.log(this.addEventForm.value);
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
