import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // MUST HAVE THIS
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TravelService } from '../../services/travell';
import { Destination } from '../../models/travell.model';
import { BookingForm } from '../booking-form/booking-form';

@Component({
  selector: 'app-package-details',
  standalone: true,
  // Ensure CommonModule is here so *if works
  imports: [CommonModule, RouterModule, BookingForm], 
  templateUrl: './package-details.html',
  styleUrl: './package-details.css'
})
export class PackageDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private travelService = inject(TravelService);
  
  // Keep this as Destination | undefined
  package: Destination | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.travelService.getDestinations().subscribe((data: Destination[]) => {
      this.package = data.find(p => p.id === id);
    });
  }
}