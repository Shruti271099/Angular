import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { EventsService } from './../events.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public data: any[] = [];
  SearchForm!: FormGroup;
  userData: any;
  SearchData: any;
  enableEdit = false;
  showSearch = false;
  togglesearch!: boolean;
  loggedIn!: boolean;
  searchOn: boolean = false;
  listOn: boolean = false;
  searchText!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private eventService: EventsService
  ) {}
  ngOnInit(): void {
    this.SearchForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
    });

    this.getdata().subscribe((data) => {
      this.listOn = true;
      this.userData = data;
      this.SearchData = data;
      console.log(this.userData);
    });
  }

  onDelete(user: number) {
    this.userData.splice(this.userData.indexOf(user), 1);
    this.eventService.deleteEvent(user).subscribe((res) => {
      console.warn('res', res);
    });
  }

  isMyEvent(userId: number) {
    const userData = JSON.parse(localStorage.getItem('userEmail') || '{}');
    return userId === userData.id;
  }

  Search(event: any) {
    this.userData = this.SearchData.filter((str: any) => {
      let reg = new RegExp(event.target.value, 'gi');
      return reg.test(str.name) || reg.test(str.description);
    });
  }
  logout() {
    localStorage.removeValue('userEmail');
    this.router.navigate(['/login']);
    JSON.parse(localStorage.getItem('userEmail') || 'false');
  }

  onClickEdit(id: number, userName: string, userDesc: string) {
    this.userData = this.userData.filter((i: any) => i.id != id);
    this.eventService.deleteEvent(id).subscribe((res) => {
      console.warn('res', res);
    });
    this.router.navigate(['/addevent'], {
      queryParams: { id, userDesc, userName },
    });
    this.http.get('http://localhost:3000/Event');
  }
  getdata() {
    return this.http.get('http://localhost:3000/EventPlan');
  }
}
