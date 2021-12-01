import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../core/blog-service.service';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css'],
})
export class FooterLinksComponent implements OnInit {
  storeActive: any;
  names: any;
  constructor(
    private blogService: BlogServiceService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.names = res.name;

      console.log(this.names);
      this.blogService.getApi(this.names).subscribe((res) => {
        this.storeActive = res;
        console.log(this.storeActive);
      });
    });
  }
  click() {
    console.log('1');
  }
}
