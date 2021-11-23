import { AboutComponent } from './about/about.component';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { BrandCarouselComponent } from './brand-carousel/brand-carousel.component';

import { TrendyFoodsComponent } from './trendy-foods/trendy-foods.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'navbarcomponent',
    component: NavbarComponent,
    children: [{ path: 'about', component: AboutComponent }],
  },
  // { path: 'main', component: MainComponent },
  { path: 'topcategories', component: TopCategoriesComponent },
  { path: 'trendyfoods', component: TrendyFoodsComponent },

  { path: 'brandcarousel', component: BrandCarouselComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
