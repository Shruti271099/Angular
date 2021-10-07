import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};
  allowEdit = false;
  serverName = '';
  serverStatus = '';
  changeSaved = false;

  constructor(private serversService: ServersService,
    private routes:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    console.log(this.routes.snapshot.queryParams);
    console.log(this.routes.snapshot.fragment);
    this.routes.queryParams.subscribe(
      (queryParams:Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.routes.fragment.subscribe();

    this.server = this.serversService.getServer(1) as any;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['/'], {relativeTo: this.routes});
  }

}
