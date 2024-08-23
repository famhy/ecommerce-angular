import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { FourzerofourComponent } from './pages/fourzerofour/fourzerofour.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
  },
  {
    path: '**',
    component: FourzerofourComponent,
  },
];
