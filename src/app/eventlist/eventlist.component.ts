import { EventsService } from './../events.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  public data : any[] = [];
  SearchForm!:FormGroup
  userData:any;
   enableEdit = false;

  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder:FormBuilder,
    private eventService:EventsService) { }

  ngOnInit(): void {
    this.SearchForm = this.formBuilder.group({
      name :new FormControl('',Validators.required)
    })
  
      this.getdata().subscribe((data) => {
        this.userData = data;
      })
  }
  getdata(){
   
    return this.http.get('http://localhost:3000/EventPlan')
    
  }
}
