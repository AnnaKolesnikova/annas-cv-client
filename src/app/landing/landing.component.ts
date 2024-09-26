import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
