import { throwError } from 'rxjs';
import { BlogInterface } from './../latestblogs/blogInterface';
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

_sort: boolean = false;
 sortValue = 'DESC';
 created_at :any;
 IsFeatured:boolean = false;
 buttonClick:any;
 url:any;
  constructor(private blogService:BlogServiceService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.blogService.loadTrendy().subscribe(res => {
      this.IsFeatured = true;
      console.log(res);
      this.productFilter = res;
      console.log(this.productFilter[0]);
    });
  }
  onClickAllButton(num1:any,num2:any){
    
    this.blogService.trendyFoodButton1(num1,num2).subscribe(res => {
      this.productFilter = res;
      console.log(this.buttonClick)
    })
  }
  onClickNewButton(p1:any,p2:any,p3:any){
    this.blogService.trendyFoodNewButton(p1,p2,p3).subscribe(res => 
      this.productFilter = res )
  }
  onClickFeatureButton(p1:any,p2:any,p3:any){
   
    this.blogService.trendyFoodButton2(p1,p2,p3).subscribe(res => {
      this.productFilter = res;
    })
  }


}
