import { EventlistComponent } from './eventlist/eventlist.component';
import { AuthenticationGuard } from './authentication.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '',redirectTo:"register",pathMatch:"full"},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'addevent',component:AddEventComponent,canActivate:[AuthenticationGuard] },
  {path:'eventlist', component:EventlistComponent ,canActivate:[AuthenticationGuard]},
  {path:'dashboard',component:DashboardComponent , canActivate:[AuthenticationGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
