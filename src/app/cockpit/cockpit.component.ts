import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [
  ]
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(){
   
  }
    onAddServer() {
      this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }
  
    onAddBlueprint() {
      this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }
  } 

