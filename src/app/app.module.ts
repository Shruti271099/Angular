
import { NgModule } from '@angular/core';
import { ModalConfigComponent } from './modal-config/modal-config.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddComponent } from './add/add.component';
import {LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ModalConfigComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule,
    ReactiveFormsModule,

  
 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
   
})
export class AppModule { }
