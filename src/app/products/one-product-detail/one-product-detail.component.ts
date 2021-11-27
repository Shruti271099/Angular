import { BlogServiceService } from 'src/app/core/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-product-detail',
  templateUrl: './one-product-detail.component.html',
  styleUrls: ['./one-product-detail.component.css']
})
export class OneProductDetailComponent implements OnInit {
 SingleProductDetail:any;
 productCategory:any;
  constructor(private route:ActivatedRoute,private blogService:BlogServiceService) { }

  ngOnInit(): void {
   let names = this.route.snapshot.params.name;
   console.log(names);
   this.blogService.getSingleProduct(names).subscribe(res => 
    {
    this.SingleProductDetail = res;
    console.log(this.SingleProductDetail);
   this.productCategory = this.SingleProductDetail.categories[0].name;
   console.log(this.productCategory[0].name)
    }
    )
  }

}
