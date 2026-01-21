import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Job } from '../../types/cv.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  public jobs = input<Job[]>([]);
}
