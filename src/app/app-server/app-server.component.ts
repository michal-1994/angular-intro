import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './app-server.component.html',
  styleUrls: ['./app-server.component.css']
})
export class AppServerComponent implements OnInit {
  serverId: number  = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverId = Math.random();
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'rgba(0, 128, 0, .25)' : 'rgba(255, 0, 0, .25)';
  }
}
