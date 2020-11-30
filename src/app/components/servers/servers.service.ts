import { EventEmitter, Injectable } from '@angular/core';

import { Server } from './server/server.model';

@Injectable({providedIn: 'root'})
export class ServersService {

  serverListUpdated: EventEmitter<Server[]> = new EventEmitter<Server[]>();
  onServerSelected: EventEmitter<Server> = new EventEmitter<Server>();
  
  private servers: Server[] = [
    new Server(0,"TestServer", false ),
    new Server(1,"AdministrationServer", true ),
    new Server(2,"ProductionServer", false ),
  ];

  public getServers(): Server[] {
    return this.servers.slice();
  }

  onSelectServer(selectedServer:Server) {
    this.onServerSelected.emit(selectedServer);
  }

  updateServerStatus(serverId: number, newName:string, newStatus: boolean): void {
    this.servers[serverId].name = newName;
    this.servers[serverId].status = newStatus;
    this.serverListUpdated.emit(this.servers.slice());
  }

  getServerById(id: number): Server {
    id = Number(id);
    const server = this.servers.find(
      (serverItem) => {
        return serverItem.id === id;
      }
    )
    return server;
  }

  updateServerById(newServer:Server): void {
    this.servers[newServer.id] = newServer;
    this.serverListUpdated.emit(this.servers.slice());
  }
 
}