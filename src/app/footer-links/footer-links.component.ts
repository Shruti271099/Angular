import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../core/blog-service.service';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css']
})
export class FooterLinksComponent implements OnInit {
storeActive:any;
  constructor(private blogService:BlogServiceService ,
    private route:ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params.name;
    console.log(name)
    this.blogService.getApi(name).subscribe(res =>
      {
      this.storeActive = res;
    
      }
    )
  
}
 

}
