import { BlogServiceService } from 'src/app/core/blog-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm!:FormGroup;
  constructor(private fb:FormBuilder,private blogSerice:BlogServiceService) { 
  this.contactForm = this.fb.group({
   yourName: ['',Validators.required],
   yourEmail:['',Validators.required],
   yourMessage:['',Validators.required]
  })
  }

  ngOnInit(): void {
  }
  onClickSubmit(){
    console.log('1');
    this.blogSerice.postContactForm(this.contactForm).subscribe(res => 
      console.log(res));
  }
}
