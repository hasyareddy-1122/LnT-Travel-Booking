import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/travell.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private http = inject(HttpClient);
  private userBookings: any[] = [];
  private jsonUrl = 'assets/data/destinations.json'; 

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.jsonUrl);
  }

  getDestinationById(id: number): Observable<Destination | undefined> {
  return this.getDestinations().pipe(
    map(destinations => destinations.find(d => d.id === id))
  );
}
addBooking(booking: any) {
  // If you see the cost in this log, the service is working!
  console.log("Service received booking:", booking); 
  this.userBookings.push(booking);
}

getBookings() {
  return this.userBookings;
}
}