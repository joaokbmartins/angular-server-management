import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Server } from './server.model';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  servers: Server[] = null;

  selectedServer: Server = null;

  constructor(
    private serversServices: ServersService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.servers = this.serversServices.getServers();
    this.selectedServer = this.servers.length > 0 ? this.servers[0] : null;
    this.serversServices.onServerSelected.subscribe(
      (server: Server) => {
        this.selectedServer = server;
      }
    );
  }

  onSelectServer(selectedServer:Server) {
    this.serversServices.onSelectServer(selectedServer);
  }

  onGoUsersPage() {
    this.router.navigate(['/users']);
  }

  onGoHomePage() {
    this.router.navigate(['/']);
  }

}