import { Router } from '@angular/router';
import { BlogServiceService } from 'src/app/core/blog-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: any;
  saveLogin: any;
  storeStatus: any;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogServiceService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: [null, Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    var login = this.loginForm.value;
    this.blogService.login(login).subscribe(
      res => 
      {
        this.saveLogin = res ;
       this.storeStatus=  this.saveLogin.jwt;
       console.log(this.storeStatus)
      
      if(this.storeStatus){
         this.router.navigate([''])
      }
    }

      // (error) => {
      //   this.storeStatus = error.statusCode;
      //   console.log(this.storeStatus);
      //   if (this.storeStatus === '200') {
      //     this.router.navigate(['']);
      //     console.log(this.saveLogin);
      //   }
      // }
    );
  }
}
