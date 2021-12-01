import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from './../core/blog-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productFilter: any;
  categories: any;
  showAllProduct: any;
  productCategories: any = [];
  onselectCategory: any;
  showItem: any = [];
  storeItem: any;
  showProducts: any;
  storeProducts: any;
  showAllImages: any;
  duplicateShowProducts: any;
  routeSub!: Subscription;
  dropdownSelected: boolean = true;
  showAll: boolean = false;
  id: any;
  value: any;
  constructor(
    private blogService: BlogServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.value = this.route.snapshot.queryParamMap.get('categories');
    console.log(this.value);
    this.blogService.getProductsByCategory(this.value).subscribe((res) => {
      this.storeItem = res;
    });

    this.blogService.all().subscribe((res) => {
      this.categories = res;
    });
    this.blogService.getAllProducts().subscribe((res) => {
      this.storeItem = res;
      this.duplicateShowProducts = res;
    });
  }
  onSelectOption(event: any) {
    this.dropdownSelected = false;
    this.onselectCategory = event.target.value;

    if (this.onselectCategory == 'all') {
      this.blogService.getAllProducts().subscribe((res) => {
        this.storeItem = res;
        this.duplicateShowProducts = res;
      });
    } else {
      this.blogService
        .getProductsByCategory(this.onselectCategory)
        .subscribe((res) => {
          this.storeItem = res;
          this.duplicateShowProducts = res;
        });
    }
  }
  all() {
    this.blogService.all().subscribe((res) => {
      this.showAllImages = res;
    });
  }
  onSearch(event: any) {
    this.storeItem = this.duplicateShowProducts.filter((str: any) => {
      let reg = new RegExp(event.target.value, 'gi');

      return reg.test(str.slug) || reg.test(str.description);
    });
  }
  onClickAll() {
    this.blogService.all().subscribe((res) => {
      this.showAllProduct = res;
    });
  }
}
