import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit {

  serverName: string = null;
  serverStatus: boolean = false;

  selectedServer: Server = null;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute, 
  ) { }
  
  ngOnInit() {
    this.getUrlData();
    this.selectedServer = this.serversService.getServers()[0];
    this.serversService.onServerSelected.subscribe(
      (selectedServer: Server) => {
        this.selectedServer = selectedServer;
        this.serverStatus = selectedServer.status;
      }
    );
  }

  getUrlData() {
    // var id: number = this.route.snapshot.queryParams[''];
    // this.serverName.this.route.snapshot.fragment);
  }

  onUpdateServerStatus():void {
    this.serversService.updateServerStatus(this.selectedServer.id, this.serverStatus);
  }

}