import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-cv-landing',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './cv-landing.component.html',
  styleUrl: './cv-landing.component.scss'
})
export class CvLandingComponent {

}
