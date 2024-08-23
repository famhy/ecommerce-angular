import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
}
