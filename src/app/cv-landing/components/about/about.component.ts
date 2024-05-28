import { Component, computed, inject } from '@angular/core';
import { CvDetailsService } from '../../services/cv-details.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  cvDetailsService = inject(CvDetailsService);

  cv = computed(() => {
    return this.cvDetailsService.cvSig();
  });

  ngOnInit(): void {
    this.cvDetailsService.getCV();
  }
}
