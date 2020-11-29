import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/users/user/user.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UsersComponent } from './components/users/users.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    ServerComponent, 
    ServersComponent,
    EditServerComponent,
    PageNotFoundComponent,
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
