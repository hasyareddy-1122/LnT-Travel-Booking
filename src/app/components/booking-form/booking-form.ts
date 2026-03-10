import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TravelService } from '../../services/travell';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  standalone: true, // Moved inside the decorator properly
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {
  private travelService = inject(TravelService);
  private router = inject(Router);

  @Input() destinationName: string = '';
  @Input() pricePerNight: number = 0;

  // Removed redundant 'destination' property from the initial object
  booking = { 
    userName: '', 
    email: '', 
    date: '', 
    nights: 1 
  };

  // The getter stays the same - it's the best way to handle real-time math
  get totalCost(): number {
    return this.booking.nights * this.pricePerNight;
  }

  onSubmit() {
  const dataToSave = {
    userName: this.booking.userName,
    email: this.booking.email,
    date: this.booking.date,
    nights: this.booking.nights,
    destination: this.destinationName,
    totalCost: this.totalCost // <--- MUST BE EXPLICITLY INCLUDED
  };

  this.travelService.addBooking(dataToSave);
  this.router.navigate(['/dashboard']);
}
}