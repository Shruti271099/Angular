import { Component, OnChanges, OnInit } from '@angular/core';
import { BlogServiceService } from '../core/blog-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  footerLinks:any 

  constructor(private blogService:BlogServiceService) { }
ngOnInit(){
  this.footerLinks = [ 
    
    {name:  'Delivery Info',value:'delivery-info'},
  { name:'Privacy Policy',value:'privacy-policy'},
   { name:'Terms & Condition',value:'termsAndConditions'},
  { name:' Order & Return', value:'orderAndReturn'}
   
 ];
}
  ngOnChanges(): void {
    this.footerLinks = [ 
    
      {name:  'Delivery Info',value:'delivery-info'},
    { name:'Privacy Policy',value:'privacy-policy'},
     { name:'Terms & Condition',value:'termsAndConditions'},
    { name:' Order & Return', value:'orderAndReturn'}
     
   ];
  }
 
 
}
