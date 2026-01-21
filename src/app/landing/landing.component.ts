import { Component, computed, effect, inject, signal } from '@angular/core';
import { SummaryComponent } from './components/summary/summary.component';
import { DataService } from './services/data.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModules } from '../shared/modules/material.module';
import { NavComponent } from './components/nav/nav.component';
import { Job, PersonalDetails, Summary } from './types/cv.interface';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ...MaterialModules,
    NavComponent,
    FooterComponent,
    SummaryComponent,
    TimelineComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  private readonly dataService = inject(DataService);

  public personalData!: PersonalDetails;
  public summary!: Summary;
  public workExperience!: Job[];
  public loading = signal<boolean>(true);

  private data = this.dataService.data;

  // dataSignal = this.dataService.data;
  // data = computed(() => this.dataSignal());

  // personalData = this.dataService.getPersonalData();
  // summary = this.dataService.getSummary();
  // workExperience = this.dataService.getWorkExperience();

  constructor() {
    effect(() => this.initData(), { allowSignalWrites: true });
  }

  private initData() {
    if (this.data().length > 0) {
      const cv = this.data()[0];
      this.personalData = cv.personalDetails;
      this.summary = cv.summary;
      this.workExperience = cv.workExperience;
      this.loading.set(false);
    }
  }
}
