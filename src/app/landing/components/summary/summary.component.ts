import { Component, Input } from '@angular/core';
import { MaterialModules } from '../../../shared/modules/material.module';
import { ICv } from '../../types/cv.interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [...MaterialModules],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  @Input() cvs: ICv[] = [];
}
