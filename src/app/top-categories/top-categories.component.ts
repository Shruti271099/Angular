import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/core/blog-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent implements OnInit {
  storeCategory:any;

  constructor(private blogService:BlogServiceService , private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.blogService.all().subscribe(res =>
      {
      this.storeCategory = res;
     
      })
  }
  onClickItem(item:any){
    const items = item.id;
    console.log(items)
    this.router.navigate(['/products'],{queryParams:{
      categories:items
    }})
   
    // console.log(item.products)
    // this.blogService.getProductsByCategory(item).subscribe(res => {
    //   console.log(res);
    // })
   
  }

}
