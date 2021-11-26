import { ActivatedRoute, Router, Routes } from '@angular/router';
import { BlogServiceService } from './../core/blog-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trendy-foods',
  templateUrl: './trendy-foods.component.html',
  styleUrls: ['./trendy-foods.component.css']
})
export class TrendyFoodsComponent implements OnInit {
productFilter!:any;
  constructor(private blogService:BlogServiceService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getProduct().subscribe(res => {
      console.log(res);
      this.productFilter = res;
      console.log(this.productFilter[0].title);
    });
  }
  onClickProduct(){
    this.router.navigate(['one-product-detail'] ,{relativeTo:this.activeRoute});
  }

}
