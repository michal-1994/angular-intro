import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './app-servers.component.html',
  styleUrls: ['./app-servers.component.css']
})
export class AppServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name server: ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
