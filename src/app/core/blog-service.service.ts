import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  private apiFooter = "https://strapi-demo.api.openxcell.dev/cms/"
  private pureApi = "https://strapi-demo.api.openxcell.dev/products/"
  private api = 'https://strapi-demo.api.openxcell.dev/blogs/';
  private authApi = 'https://strapi-demo.api.openxcell.dev/auth/local/regitser';
  private contactUses = 'https://strapi-demo.api.openxcell.dev/contact-uses/';
  private topCategories = 'https://strapi-demo.api.openxcell.dev/products?categories.'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http:HttpClient
  ) { }

  blogDetail(){
  return  this.http.get(this.api);
  }
  getOneBlog(id:any){
    return this.http.get(this.api+id );
    // .pipe(map((res: any) => res.json()));
  }
  getProduct(){
    return this.http.get(this.pureApi)
  }
  getSingleProduct(nameOfProduct:any){
    return this.http.get(this.pureApi+nameOfProduct);
  }
  getProductCategory(slug:any){
    return this.http.get(this.topCategories,slug)
  }
  getRegisterUser(forms:any){
    return this.http.post(this.authApi,forms,this.httpOptions);
  }
  getApi(id:any){
    return this.http.get(this.apiFooter+id);
  }
  postContactForm(Contactform:any){
    return this.http.post(this.contactUses,Contactform,this.httpOptions)
  }
  getTopCategory(id:any){
    return this.http.get(this.topCategories,id)
  }
}
