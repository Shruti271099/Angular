import { BlogInterface } from './../blogInterface';
import { BlogServiceService } from './../../core/blog-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-array',
  templateUrl: './blog-array.component.html',
  styleUrls: ['./blog-array.component.css']
})
export class BlogArrayComponent implements OnInit {

  blogList!:BlogInterface[];

  constructor( private blogService:BlogServiceService) { }


  ngOnInit(): void {
  
    this.blogService.blogDetail()
    .subscribe(
      (data:any )  => 
      {
      this.blogList = data;
      console.log(this.blogList[1].title);
      ;

      }
    )
  
  }

}
