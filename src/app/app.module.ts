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
import { LatestBlogsComponent } from './latest-blogs/latest-blogs.component';
import { BrandCarouselComponent } from './brand-carousel/brand-carousel.component';
import { LoginComponent } from './user-Profile/login/login.component';
import { RegisterComponent } from './user-Profile/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    TopCategoriesComponent,
    TrendyFoodsComponent,
    LatestBlogsComponent,
    BrandCarouselComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
