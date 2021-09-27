import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  createServer = "No server is created at this time";
  UpdateName = "My Server";
  UserName = " ";
  create_server = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewserver = true;
    },2000);
    
  }

  ngOnInit(): void {
  }
  onCreationServer(){
    this.create_server = true;
    this.createServer = "Server Created   and name is "+this.UpdateName;
  };
  onUpdateName( event:Event){
    this.UpdateName = (<HTMLInputElement>event.target).value;
  }
 

}
