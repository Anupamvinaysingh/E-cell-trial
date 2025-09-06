import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/home/aboutus/aboutus';
import { Registration } from './pages/registration/registration';


export const routes: Routes = [
  { path: '', component: Home },             // Default route
  { path: 'about', component: Aboutus },       // Named route
  { path: 'registration', component: Registration}
];

