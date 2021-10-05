import { Item } from './../item.module';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 itemlist: Item[] = [];
 @ViewChild('itemAdd') itemRef!:ElementRef;
 @Output() itemAdded = new EventEmitter<Item>();
  
  
  constructor() { }

  
  ngOnInit(): void {
  }
  onAddItem(){
    const itemName = this.itemRef.nativeElement.value;
    const newItem = new Item(itemName);
    this.itemAdded.emit(newItem);
  }

  
}



