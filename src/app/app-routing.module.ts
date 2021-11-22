import { AppComponent } from './app.component';
import { BrandCarouselComponent } from './brand-carousel/brand-carousel.component';
import { LatestBlogsComponent } from './latest-blogs/latest-blogs.component';
import { TrendyFoodsComponent } from './trendy-foods/trendy-foods.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'main',component:MainComponent},
  {path:'topcategories',component:TopCategoriesComponent},
  {path:'trendyfoods',component:TrendyFoodsComponent},
  {path:'latestblogs',component:LatestBlogsComponent},
  {path:'brandcarousel',component:BrandCarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
