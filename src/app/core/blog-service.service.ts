import { PassValidatorComponent } from './../pass-validator/pass-validator.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  // 
  public baseURL = 'http://192.168.3.90:1337';
  
  private apiFooter = `${this.baseURL}/cms/`;
  private pureApi = `${this.baseURL}/products/`;
  private api = `${this.baseURL}/blogs/`;
  private filterApi = `${this.baseURL}/categories`;
  private contactUses = `${this.baseURL}/contact-uses`;
  private topCategories = `${this.baseURL}/products?categories`;
  private registerApi = `${this.baseURL}/auth/local/register`;
  private loginApi = `${this.baseURL}/auth/local`;
  private forgotPassword = `${this.baseURL}/auth/forgot-password`;
  private resetPassword = `${this.baseURL}/auth/reset-password`;
  private Forall = `${this.baseURL}/products/`;
  private AboutUs = `${this.baseURL}/cms/about-us`
  private NewButton = 'https://strapi-demo.api.openxcell.dev/products?_sort=created_at:DESC&_start=0&_limit=8';

  private url = `${this.baseURL}/products?_start=`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
 aboutUs(){
   return this.http.get(this.AboutUs);
 }
  blogDetail() {
    return this.http.get(this.api);
  }
  getOneBlog(id: any) {
    return this.http.get(this.api + id);
  }
  getProduct() {
    return this.http.get(this.pureApi);
  }
  getSingleProduct(nameOfProduct: any) {
    return this.http.get(this.pureApi + nameOfProduct);
  }
  getProductCategory(slug: any) {
    return this.http.get(this.topCategories, slug);
  }

  getApi(id: any) {
    return this.http.get(this.apiFooter+id);
  }


  postContactForm(Contactform: any) {
    return this.http.post(this.contactUses, Contactform, this.httpOptions);
  }
  postRegister(username: any) {
    return this.http.post(this.registerApi, username, this.httpOptions);
  }
  getTopCategory(id: any) {
    return this.http.get(this.topCategories, id);
  }
  getProductsByCategory(id: any) {
    return this.http.get(this.pureApi, {
      params: {
        'categories.id': id,
      },
    });
  }
  getFilter(name: any) {
    return this.http.get(this.filterApi + name);
  }
  uptoproduct() {
    return this.http.get(this.pureApi);
  }
  login(username: any) {
    return this.http.post(this.loginApi, username, this.httpOptions);
  }
  forgotPssword(email: any) {
    return this.http.post(this.forgotPassword, email);
  }
  ResetPassword(body:any) {
    return this.http.post(this.resetPassword,body)

  }
  all() {
    return this.http.get(this.filterApi);
  }
  getAllProducts() {
    return this.http.get(this.Forall);
  }
  loadTrendy(){
    return this.http.get(`${this.baseURL}/products?_start=0&_limit=8`)
  }
  trendyFoodButton1(para1: any, para2: any) {
    return this.http.get(`${this.baseURL}/products?_start=${para1}&_limit=${para2}`)
  }
  trendyFoodButton2(para1:any,para2:any,para3:any){
    return this.http.get(`${this.baseURL}/products?IsFeatured=${para1}&_start=${para2}&_limit=${para3}`)
  }
  trendyFoodNewButton(para1:any,para2:any,para3:any){
    return  this.http.get(`${this.baseURL}/products?_sort=created_at:${para1}&_start=${para2}&_limit=${para3}`);
  }
  RedirectProductCategory(id:any){
    return  this.http.get(this.pureApi,id);
  }
  getStatusCode() {
    return this.http.get(this.loginApi,this.httpOptions)
    
  }
}
