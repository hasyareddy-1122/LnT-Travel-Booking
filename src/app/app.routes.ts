import { Routes } from '@angular/router';
import { DestinationList } from './components/destination-list/destination-list';
import { PackageDetails } from './components/package-details/package-details';
import { BookingForm } from './components/booking-form/booking-form';
import { UserDashboard } from './components/user-dashboard/user-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'destinations', pathMatch: 'full' }, 
  { path: 'destinations', component: DestinationList },
  { path: 'package/:id', component: PackageDetails },
  { path: 'dashboard', component: UserDashboard }
];