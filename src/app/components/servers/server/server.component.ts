import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Server } from './server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  server: Server = null;

  constructor(
    private serversService: ServersService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const id:number = this.activatedRoute.snapshot.params['id'];
        this.server = this.serversService.getServerById(id);
      }
    );
  }

  onEditServer() {
    this.router.navigate(
      ['/servers', 'edit', this.server.id],
      {
        relativeTo: this.activatedRoute,
        queryParamsHandling: 'merge', // preserve 
        preserveFragment: true,
        queryParams: {
          allowEdit: this.server.id == 1 ? 1 : 0,
        },
      }
    );
  }
  
}