import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerResolver } from './components/servers/server/server-resolver.service';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/page-not-found', pathMatch:'full' },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'users', component: UsersComponent, children: [  
      { path: ':id', component: UserComponent },
    ]
  },
  {
    path: 'servers',
    // canActivate: [  
    //   AuthGuard   // USING THE AUTHGUARD TO BLOCK THE ACCESS TO THE SERVERS' ROUTE IF NOT 'FAKE LOGGEDIN' 
    // ],
    canActivateChild: [
      AuthGuard
    ],
    component: ServersComponent, children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {
          'serverResolved': ServerResolver
        },
      },
      {
        path: 'edit/:id', component: EditServerComponent,
        canDeactivate: [
          CanDeactivateGuard
        ]
      },
    ]
  },
  {
    // path: 'page-not-found', component: PageNotFoundComponent
    path: 'page-not-found', component: ErrorPageComponent, data: {message: "404 - Page cannot be found."}
  },
  {
    path: '**', redirectTo: 'page-not-found'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), // { useHash: true }
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }