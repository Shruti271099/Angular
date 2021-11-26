import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../core/blog-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks:any = [ 
    
    {name:  'Delivery Info',value:'delivery-info'},
  { name:'Privacy Policy',value:'privacy-policy'},
   { name:'Terms & Condition',value:'termsAndConditions'},
  { name:' Order & Return', value:'orderAndReturn'}
   
 ];

  constructor(private blogService:BlogServiceService) { }

  ngOnInit(): void {
   
  }
 
}
