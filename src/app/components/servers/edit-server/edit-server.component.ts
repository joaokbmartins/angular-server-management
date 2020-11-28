import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router:Router,
    private activatedRoute: ActivatedRoute, 
  ) { }
  
  ngOnInit() {
    var id: number = this.activatedRoute.snapshot.params['id'];
    this.selectedServer = this.serversService.getServerById(id);
    this.serverStatus = this.selectedServer.status;
    // this.getUrlData();
    // this.selectedServer = this.serversService.getServers()[0];
    // this.serversService.onServerSelected.subscribe(
    //   (selectedServer: Server) => {
    //     this.selectedServer = selectedServer;
    //     this.serverStatus = selectedServer.status;
    //   }
    // );
  }

  getUrlData() {
  }

  onUpdateServerStatus(): void { 
    this.serversService.updateServerStatus(this.selectedServer.id, this.serverStatus);
    this.router.navigate(['/servers',this.selectedServer.id]);
  }

}