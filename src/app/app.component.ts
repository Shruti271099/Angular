

// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component ,OnInit} from '@angular/core';
import {LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';
import { FormsModule } from '@angular/forms';
import { FormControl ,FormGroup ,FormBuilder ,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name1 = new FormControl('');
  todoForm!:FormGroup;
  storedname:any;
  
  constructor(private fb :FormBuilder){
    this.todoForm = this.fb.group({taskName :['',Validators.required]})
  }
  
  ngOnInit(){
   
    this.todos = JSON.parse(localStorage.getItem("todos")!);
    // console.log(storedNames);
    // console.log(localStorage.getItem('todos'))
   
  
// =============================================================
    // localStorage.setItem("quentinTarantino", JSON.stringify(this.todos));
    // var retrievedData = localStorage.getItem("quentinTarantino");
//  ====================================================================
  // this.localStorage.setItem(JSON.stringify("TodoList",this.todos));
  //  var StoredItem = this.localStorage.getItem(JSON.parse("TodoList"));
  //  console.log(StoredItem)
  }

  name = new FormControl('');
  localStorage:any;
  [x: string]: any;
  myValue:any;
  todos:any[] = [];
  isShown: boolean = true; 
  isUpdate:boolean = false;
  filterName!:string;
 

  // @Input() item!:Item ;
  // @Input() ViewSelected = new EventEmitter<void>();
  // items:any[] = [];
  
  clearInput: string = '';



  onClickAdd(itemInInput:string){
    
  
    let storedNames = JSON.parse(localStorage.getItem("todos")!);

     this.todos.push({id:this.todos.length , name:itemInInput});
     localStorage.setItem("todos", JSON.stringify(this.todos));
     this.clearInput = ' ';
     this.isUpdate = false;
     this.isShown = true
   
  


    //  localStorage.setItem("todos", JSON.stringify(this.todos));
    //  var storedNames = JSON.parse(localStorage.getItem("todos")!);
    //  console.log(storedNames);

  }
  onClickEdit(id:number){
    let storedNames = JSON.parse(localStorage.getItem("todos")!);
    this.name1 = this.todos[id]['name'];
    this.todoForm.patchValue({taskName: this.todos[id]['name']});
    this.onClickDelete(this.id)
    this.isShown = false;
    this.isUpdate = true
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.clearInput= this.todos[id]['name'];
   
  }
  
  onClickView(){

    this.isShow = !this.isShow;
   
  }
  onClickClearAll(){
    let storedNames = JSON.parse(localStorage.getItem("todos")!);
    this.todos = [];
    localStorage.setItem("todos", JSON.stringify(this.todos));
    }        
  
  onClickDelete(id:number){
    let storedNames = JSON.parse(localStorage.getItem("todos")!);
    this.todos = this.todos.filter(itemInInput=>itemInInput.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
   
  }
  toggleShow(){

  }
  onUpdate(){

  }
 
 
  

}
  

