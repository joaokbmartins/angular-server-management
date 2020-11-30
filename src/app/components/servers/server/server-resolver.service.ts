import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { Server } from './server.model';

@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(
    private serversService: ServersService
  ) {}

  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot,
  ) : Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServerById(activatedRouteSnapshot.params['id']);
  }
  
}