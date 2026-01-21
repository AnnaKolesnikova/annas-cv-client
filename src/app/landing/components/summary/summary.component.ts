import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MaterialModules } from '../../../shared/modules/material.module';
import { Cv, Summary } from '../../types/cv.interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [...MaterialModules],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  public summary = input<Summary>();
}
