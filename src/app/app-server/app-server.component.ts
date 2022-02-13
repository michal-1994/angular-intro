import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './app-server.component.html',
  styleUrls: ['./app-server.component.css']
})
export class AppServerComponent implements OnInit {
  serverId: number  = 10;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

}
