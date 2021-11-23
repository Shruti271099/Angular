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
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
     FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
