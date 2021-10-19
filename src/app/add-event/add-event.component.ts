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
    private router:Router) { }

  ngOnInit(): void {
    this.addEventForm = this.formBuilder.group({
      'name': new FormControl(''),
      'description': new FormControl('')
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
