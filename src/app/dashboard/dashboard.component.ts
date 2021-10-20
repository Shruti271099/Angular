import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from './../events.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data : any[] = [];
  SearchForm!:FormGroup
  userData:any;
   enableEdit = false;
   showSearch = false;
   togglesearch!:boolean;
  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder:FormBuilder,
    private eventService:EventsService) { 
    
  }
  ngOnInit(): void {
  this.SearchForm = this.formBuilder.group({
    name :new FormControl('', Validators.required)
  })

    this.getdata().subscribe((data) => {
      
      this.userData = data;
      console.log(this.userData)
    })
  }
 
  
  
  onDelete(user:number){
    this.userData.splice(this.userData.indexOf(user),1);
    this.eventService.deleteEvent(user).subscribe((res) => {
      console.warn("res",res)
    })
   
  }

  isMyEvent(userId: number) {
    const userData = JSON.parse(localStorage.getItem('userEmail') || '{}');
    return userId === userData.id;
  }
  
  Search(){
    this.http.get<any>('http://localhost:3000/EventPlan').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.name === this.SearchForm.value.name 
          );
         
        });
        if (user) {
         
          alert('Event Found!');
          
          // this.loginForm.reset();
          this.router.navigate(['dashboard']);
          
        } else {
          alert('Event Not Found');
        }
      },
      (ere) => {
        alert('Error Occurred');
      }
    );
    

  }

  onClickEdit(id:number,user:string){
    // this.userData = this.userData.filter((i:any)=>i.id != id);
    // this.eventService.deleteEvent(id).subscribe((res) => {
    //   console.warn("res",res)
    // })
    this.router.navigate(['/addevent'], {queryParams: {id}});
    // localStorage.setItem('ClickData',JSON.stringify(user))
    
    
   
   
  }
  getdata(){
   
    return this.http.get('http://localhost:3000/EventPlan');
    
  }
 
 

}
