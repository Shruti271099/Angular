import { EventsService } from './../events.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
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
  userEmailPass: any;
  loggedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private eventService: EventsService
  ) {
    this.showPassword = false;
    console.log('1');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }
  showHidePassword(e: any) {
    this.showPassword = e.target.checked;
  }
  
  login() {
   this.eventService.loggedIn = true;
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
         var storeEmailPass = localStorage.setItem('userEmail', JSON.stringify(this.userEmailPass));
        var store = JSON.parse(localStorage.getItem('userEmail') || '{}');
        localStorage.setItem('loggedIn',JSON.stringify(true))
        var storeEmail = store.email;
        console.log(storeEmail);

        } else {
          alert('User Not Found');
        }
      },
      (ere) => {
        alert('Error Occurred');
      }
    );
    console.log(localStorage.getItem('user'));
    JSON.parse(localStorage.getItem('user')!);
  }
}
