import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern = "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))";
  namePattern = "[a-zA-Z ]*";
  showPassword! :boolean;
 

  
  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router) { 
    this.showPassword = false;
  }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      name: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.namePattern)
    ]),
      email: new FormControl('',
      [Validators.required,
      Validators.pattern(this.emailPattern)]),
      password: new FormControl('',
     [ Validators.required,
      Validators.pattern(this.pwdPattern)])
    })
  }
  
  showHidePassword(e:any) {
    this.showPassword = e.target.checked;
}
onSignUp(){
  console.log(this.registerForm.value);
  this.http.post('http://localhost:3000/Events',this.registerForm.value)
  .subscribe(response => {
    alert('SignUp Successful');
    this.registerForm.reset();
    this.router.navigate(['login']);
  }, err => {
      alert("Error Occcured")
  })
}
}
