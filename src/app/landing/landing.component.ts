import { Component, computed, effect, signal } from '@angular/core';
import { SummaryComponent } from './components/summary/summary.component';
import { DataService } from './services/data.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModules } from '../shared/modules/material.module';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ...MaterialModules,
    NavComponent,
    SummaryComponent,
    TimelineComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  loading = signal<boolean>(true);

  dataSignal = this.dataService.data;
  data = computed(() => this.dataSignal());

  personalDataSignal = this.dataService.getPersonalData;
  personalData = computed(() => this.personalDataSignal());

  summarySignal = this.dataService.getSummary;
  summary = computed(() => this.summarySignal());

  workExperienceSignal = this.dataService.getWorkExperience;
  workExperience = computed(() => this.workExperienceSignal());

  constructor(private dataService: DataService) {
    effect(
      () => {
        if (this.dataSignal().length > 0) {
          this.loading.set(false);
        }
      },
      { allowSignalWrites: true }
    );
  }
}
