import { FooterLinksComponent } from './footer-links/footer-links.component';
import { OneProductDetailComponent } from './products/one-product-detail/one-product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LatestblogsComponent } from './latestblogs/latestblogs.component';
import { PassValidatorComponent } from './pass-validator/pass-validator.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrandCarouselComponent } from './brand-carousel/brand-carousel.component';
import { TrendyFoodsComponent } from './trendy-foods/trendy-foods.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './latestblogs/blog-details/blog-details.component';
import { BlogArrayComponent } from './latestblogs/blog-array/blog-array.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  {path:'footerLinks/:name' , component:FooterLinksComponent},
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'one-product-detail/:name', component: OneProductDetailComponent },
  {
    path: 'products',
    component: ProductsComponent,
    
  },

  { path: 'contact', component: ContactComponent },

  {
    path: 'navbarcomponent',
    component: NavbarComponent,
  },
  { path: 'main', component: MainComponent },
  { path: 'latestblogs', component: LatestblogsComponent ,
  children:[{
    path:'blog-array' , component:BlogArrayComponent
  }]},
  { path: 'blogdetail/:id', component: BlogDetailsComponent },
  { path: 'topcategories', component: TopCategoriesComponent },
  
  { path: 'pass-validation', component: PassValidatorComponent },
  { path: 'brandcarousel', component: BrandCarouselComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
