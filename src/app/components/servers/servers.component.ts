import { Component, OnInit } from '@angular/core';

import { Server } from './server/server.model';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  servers: Server[] = null;

  selectedServer: Server = null;

  constructor(
    private serversServices: ServersService
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

}