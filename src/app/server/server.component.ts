import { templateSourceUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl : "./server.component.html",
})

export class ServerComponent{
    serverId:number = 10;
    serverStatus:string = "offline";
}