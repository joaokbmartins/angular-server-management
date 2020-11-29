import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component ({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit {

  serverStatus: boolean = false;
  selectedServer: Server = null;
  allowEdit: boolean = false;


  constructor (
    private serversService: ServersService,
    private router:Router,
    private activatedRoute: ActivatedRoute, 
  ) { }
  
  ngOnInit() {    
    this.allowEdit = Number(this.activatedRoute.snapshot.queryParams['allowEdit']) == 1 ? true : false;
    
    var id: number = this.activatedRoute.snapshot.params['id'];
    this.selectedServer = this.serversService.getServerById(id);
    this.serverStatus = this.selectedServer.status;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        id = this.activatedRoute.snapshot.params['id'];
        this.selectedServer = this.serversService.getServerById(id);
        this.serverStatus = this.selectedServer.status;
        console.log("subscribed");
      }
    );
  }  

  onUpdateServerStatus(): void { 
    this.serversService.updateServerStatus(this.selectedServer.id, Boolean(this.serverStatus));
    this.router.navigate(['/servers',this.selectedServer.id]);
  }

  setServerStatus(selectedStatus:Event): void {
    this.serverStatus = selectedStatus.target['value'] == 'true' ? true : false;
  }
 
}