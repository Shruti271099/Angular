import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/core/blog-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent implements OnInit {

  constructor(private blogService:BlogServiceService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    let names = this.route.queryParams;
    this.blogService.getProductCategory(names).subscribe(res =>
      console.log(res))
  }

}
