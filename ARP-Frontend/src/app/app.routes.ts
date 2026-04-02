import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { SuperadminDashboard } from './superadmin-dashboard/superadmin-dashboard';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { UserDashboard } from './user-dashboard/user-dashboard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'superadmin-dashboard', component: SuperadminDashboard},
  { path: 'admin-dashboard', component: AdminDashboard},
  { path: 'user-dashboard', component: UserDashboard },
  { path: '**', redirectTo: '' }
];
