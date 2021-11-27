import { BlogServiceService } from 'src/app/core/blog-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm!:FormGroup;
saveUSerData :any;
  constructor(private blogSerice:BlogServiceService) { 
  this.contactForm = new FormGroup({
   name: new FormControl ('',Validators.required),
   email: new FormControl('',Validators.required),
   message: new FormControl('',Validators.required)
  })
  }

  ngOnInit(): void {
  }
  onClickSubmit(){
    let ContactForm = JSON.stringify(this.contactForm.value);
    this.blogSerice.postContactForm(ContactForm).subscribe(res => 
     
     { this.saveUSerData = res; 
     console.log(res);
    }
    )
  }
  SaveContact(){

  }
}
