import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  server: Server = null;

  constructor(
    private serversService: ServersService,
    private activatedRoute:ActivatedRoute
  ) {}
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServerById(id);
    console.log(this.server);
  }
}