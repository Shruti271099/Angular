import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { TrendyFoodsComponent } from './trendy-foods/trendy-foods.component';
import { BrandCarouselComponent } from './brand-carousel/brand-carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SharedComponent } from './shared/shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassValidatorComponent } from './pass-validator/pass-validator.component';
import { LatestblogsComponent } from './latestblogs/latestblogs.component';

import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import {  HttpClientModule } from '@angular/common/http';
import { OneProductDetailComponent } from './products/one-product-detail/one-product-detail.component';
import { BlogArrayComponent } from './latestblogs/blog-array/blog-array.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    TopCategoriesComponent,
    TrendyFoodsComponent,
    BrandCarouselComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    SharedComponent,
    PassValidatorComponent,
    LatestblogsComponent,
 
    ProductsComponent,
    ContactComponent,
    OneProductDetailComponent,
    BlogArrayComponent,
    FooterLinksComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
