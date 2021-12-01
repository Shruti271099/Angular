import { BlogServiceService } from 'src/app/core/blog-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm:any;
  constructor(private fb:FormBuilder,private blogService:BlogServiceService) {
    this.forgotPasswordForm = this.fb.group({
        email: [null,[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
onSubmit(){
  const email = this.forgotPasswordForm.value;
  this.blogService.forgotPssword(email).subscribe(res => {})
 

}
}
