import { Component, computed, effect, signal } from '@angular/core';
import { SummaryComponent } from './components/summary/summary.component';
import { DataService } from './services/data.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModules } from '../shared/modules/material.module';
import { NavComponent } from './components/nav/nav.component';
import { IJob, IPersonalDetails, ISummary } from './types/cv.interface';

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
  personalData!: IPersonalDetails;
  summary!: ISummary;
  workExperience!: IJob[];

  loading = signal<boolean>(true);

  // dataSignal = this.dataService.data;
  // data = computed(() => this.dataSignal());

  data = this.dataService.data;

  // personalData = this.dataService.getPersonalData();
  // summary = this.dataService.getSummary();
  // workExperience = this.dataService.getWorkExperience();

  constructor(private dataService: DataService) {
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
