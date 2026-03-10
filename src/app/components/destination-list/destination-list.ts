import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelService } from '../../services/travell'; 
import { Destination } from '../../models/travell.model';
import { RouterModule } from '@angular/router'; // 1. Add this import

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destination-list.html',
  styleUrl: './destination-list.css'
})
export class DestinationList implements OnInit {
  private travelService = inject(TravelService); 
  
  travelPackages: Destination[] = [];

  ngOnInit() {
    // FIX 2: Explicitly type 'data' as 'Destination[]' to clear 'any' and 'unknown' errors
    this.travelService.getDestinations().subscribe((data: Destination[]) => {
      this.travelPackages = data;
    });
  }
}