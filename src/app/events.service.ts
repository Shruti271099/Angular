import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url='http://localhost:3000/EventPlan'

  constructor(private http:HttpClient) { }
  deleteEvent(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
 
}

