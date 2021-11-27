import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from './../core/blog-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  storeActive :any;

  constructor(private blogService:BlogServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    
   
    this.blogService.getApi('about-us').subscribe(res =>
      {
      this.storeActive = res;
      console.log(res)
    
      }
    )
  }

}
