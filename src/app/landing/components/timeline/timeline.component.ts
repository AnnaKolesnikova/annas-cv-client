import { Component, Input } from '@angular/core';
import { IJob } from '../../types/cv.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() jobs: IJob[] = [];
}
