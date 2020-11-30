import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { CanComponentDeactivate } from 'src/app/shared/services/can-deactivate-guard.service';
import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component ({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  serverName: string = null;
  serverStatus: boolean = false;

  selectedServer: Server = null;
  allowEdit: boolean = false;

  changesSaved: boolean = false;


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
    this.serverName = this.selectedServer.name;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        id = this.activatedRoute.snapshot.params['id'];
        this.selectedServer = this.serversService.getServerById(id);
        this.serverStatus = this.selectedServer.status;
        this.serverName = this.selectedServer.name;
        console.log("subscribed");
      }
    );
  }  

  onUpdateServerStatus(): void { 
    this.serversService.updateServerStatus(this.selectedServer.id, this.serverName, Boolean(this.serverStatus));
    this.changesSaved = true;
    // this.router.navigate(['../../',this.selectedServer.id], {relativeTo: this.activatedRoute});
    this.router.navigate(['/servers', this.selectedServer.id]);
    console.log("Changes saved!. You'll be redirected...");
  }

  setServerStatus(selectedStatus:Event): void {
    this.serverStatus = selectedStatus.target['value'] == 'true' ? true : false;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.serverStatus, this.selectedServer.status, this.serverName, this.selectedServer.name);
    
    if (!this.allowEdit) {
      return true;
    } else if ((this.serverStatus != this.selectedServer.status || this.serverName != this.selectedServer.name) && !this.changesSaved) {
      return confirm("Cancel editing?");
    } 
    return true;
  }
 
}