
import { BlogServiceService } from './../core/blog-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productFilter:any;
 productCategories:any = [];
 onselectCategory:any;
 showItem:any = [];
 storeItem:any;
  constructor(private blogService:BlogServiceService) { }

  ngOnInit(): void {
    this.blogService.getProduct().subscribe(res => {
      this.productFilter = res;
      console.log(this.productFilter);
    });
  }
  onSelectOption(event:any){
    this.onselectCategory = event.target.value;
   console.log(this.onselectCategory);
   this.blogService.getProductCategory(this.onselectCategory).subscribe(res => {
     this.storeItem = res;
     
    
   })

  }
  }
 

