import { AuthenticationGuard } from './authentication.guard';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddEventComponent } from './add-event/add-event.component';
import { EventlistComponent } from './eventlist/eventlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
     DashboardComponent,
   AddEventComponent,
   EventlistComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  
   
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
