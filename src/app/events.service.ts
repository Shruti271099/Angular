import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url='http://localhost:3000/EventPlan'
  loginForm: FormGroup;
  userEmailPass:any;
  setLoggedIn:boolean = false;
  loggedIn = false;
  

  constructor(private http:HttpClient,private formBuilder:FormBuilder,private router:Router) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
  })
 }
  deleteEvent(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  
  login() {
    this.setLoggedIn = true;
    this.http.get<any>('http://localhost:3000/Events').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
           
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
            
          );
         
        });
        if (user) {
          this.userEmailPass = user;
          alert('Login Successfully');
          // this.loginForm.reset();
          this.router.navigate(['dashboard']);
          localStorage.setItem('user',JSON.stringify(this.userEmailPass));
          
        } else {
          alert('User Not Found');
        }
      },
      (ere) => {
        alert('Error Occurred');
      }
    );
    console.log(localStorage.getItem('user'))
    JSON.parse(localStorage.getItem('user')!);
  }
 
}

