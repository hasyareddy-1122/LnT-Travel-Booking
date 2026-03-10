import { Component, OnInit, inject } from '@angular/core';
import { TravelService } from '../../services/travell';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})

export class UserDashboard implements OnInit {
  private travelService = inject(TravelService);
  myBookings: any[] = [];

  ngOnInit() {
    // This is the critical step: pulling the data from the service
    this.myBookings = this.travelService.getBookings();
    console.log("Dashboard loaded these bookings:", this.myBookings);
  }
}
