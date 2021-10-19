import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword!: boolean;
  userEmailPass:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.showPassword = false;
  }

  ngOnInit(): void {
    localStorage.getItem('data');
   
    this.loginForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    
    });
  }
  showHidePassword(e: any) {
    this.showPassword = e.target.checked;
  }
  login() {
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
          localStorage.setItem('data',JSON.stringify(this.userEmailPass));
          JSON.parse(localStorage.getItem('data') || '{}');
          alert('Login Successfully');
          // this.loginForm.reset();
          this.router.navigate(['dashboard']);
          
        } else {
          alert('User Not Found');
        }
      },
      (ere) => {
        alert('Error Occurred');
      }
    );
    
  }
}
