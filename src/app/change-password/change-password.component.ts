import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/core/blog-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm! :FormGroup;
 code:any;
  constructor(private router:Router, private fb:FormBuilder,private blogService:BlogServiceService,private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params:any) => {
     this.code =  params.code;
    });
    console.log(this.code)
    this.ChangePasswordForm = this.fb.group({
     
      code:[this.code],
      password: ['',Validators.required],
      passwordConfirmation: ['',[ RxwebValidators.compare({fieldName:'password' }),Validators.required]]
    })
    
  }
onSubmit(){
  const newPass = this.ChangePasswordForm.value;
  
  this.blogService.ResetPassword(newPass).subscribe(res => {})
  this.router.navigate([''])
}
}
