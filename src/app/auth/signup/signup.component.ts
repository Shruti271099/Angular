import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
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
  saveUserData: any;
  
  constructor(
    private fb: FormBuilder,
    private blogService: BlogServiceService,
    private router:Router
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      confirmPassword:['',[ RxwebValidators.compare({fieldName:'password' }),Validators.required]],
    });
  }

  ngOnInit(): void {}
  get f(){
   return this.signUpForm.value;
  }

  onSubmit() {
    
    var name = this.signUpForm.value;
    this.blogService.postRegister(name).subscribe(res =>
      console.log(res)
      )
      this.router.navigate(['auth/login']);
     
   
  }
  confirmPassword(){
    const  value = this.signUpForm.value;
    console.log(value)
  }
  
}
