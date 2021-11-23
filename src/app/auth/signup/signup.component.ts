import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!:FormGroup;
  passwordPattern="/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/" 
  

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group ({
      username: ['',Validators.required],
      'password': ['',[Validators.required,Validators.pattern(this.passwordPattern)]],
      confirmPassword:[''],
    })
  }
  ngOnInit(): void {
    
  }
submit(){
   console.log(this.form.value)
}

}

