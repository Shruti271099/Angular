import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BlogServiceService } from 'src/app/core/blog-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: any;
  success = '';
  passwordPattern =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&()-`.+,/"])[A-Za-zd!@#$&()-`.+,/"].{7,}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  ValidatorFn: any;
  passwordValue!: any;
  saveUserData:any;


  constructor(
    private fb: FormBuilder,
    private blogService: BlogServiceService
  ) {
    this.signUpForm = this.fb.group({
      username:['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]],
      password:['', [
        Validators.required,
        Validators.minLength(8),
      ]],
      confirmPassword:['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  
  onSubmit() {
    
   
    let ContactForm = JSON.stringify(this.signUpForm.value);
    this.blogService.postContactForm(ContactForm).subscribe(res => 
     
     { this.saveUserData = res; 
     console.log(res);
    }
    )
  }
}
