import { EventEmitter, Injectable } from '@angular/core';
import { Server } from './server.model';

@Injectable({providedIn: 'root'})
export class ServersService {

  serverListUpdated: EventEmitter<Server[]> = new EventEmitter<Server[]>();
  onServerSelected: EventEmitter<Server> = new EventEmitter<Server>();
  
  private servers: Server[] = [
    new Server(0,"TestServer", false ),
    new Server(1,"AdministrationServer", false ),
    new Server(2,"ProductionServer", false ),
  ];

  public getServers(): Server[] {
    return this.servers.slice();
  }

  onSelectServer(selectedServer:Server) {
    this.onServerSelected.emit(selectedServer);
  }

  updateServerStatus(serverId: number, newStatus: boolean): void {
    this.servers[serverId].status = newStatus;
    this.serverListUpdated.emit(this.servers.slice());
  }

  getServerById(id:number): Server {
    return this.getServers()[id];
  }

  updateServerById(newServer:Server): void {
    this.servers[newServer.id] = newServer;
    this.serverListUpdated.emit(this.servers.slice());
  }
 
}