import { BlogInterface } from './../blogInterface';
import { BlogServiceService } from './../../core/blog-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blogList!:BlogInterface;
 
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogServiceService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log(id);
    const datas = this.blogService.getOneBlog(id).subscribe((data: any) => {
      this.blogList = data;
      console.log(this.blogList.title)
    });
    console.log(datas);
    
  }
 
}
