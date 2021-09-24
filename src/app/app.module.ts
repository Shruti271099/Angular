import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerByCommandComponent } from './server-by-command/server-by-command.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerByCommandComponent
    
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
