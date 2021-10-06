import { AppModule } from './../app.module';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ServerComponent } from './../servers/server/server.component';
import { EditServerComponent } from './../servers/edit-server/edit-server.component';
import { ServersComponent } from './../servers/servers.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';




    const appRoutes:Routes = [
        {path: '', component: HomeComponent},
        {path: 'users', component: UsersComponent , children:[
        {path: ':id/:name', component: UserComponent}
      ]},
        {path: 'servers', component: ServersComponent , children:[
          {path: ':id/:edit', component: EditServerComponent},
          {path: ':id', component: ServerComponent}
         ]
        },
        {path: 'not-found' , component:PageNotFoundComponent},
        {path: '**', redirectTo: '/not-found'}
      ];

@NgModule({
   imports: [
       RouterModule.forRoot(appRoutes)
   ],
   exports:[RouterModule]
})
export class AppRoutingModule{

}