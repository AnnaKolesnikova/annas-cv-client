import { Component, Input } from '@angular/core';
import { MaterialModules } from '../../../shared/modules/material.module';
import { ICv, IPersonalDetails } from '../../types/cv.interface';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [...MaterialModules],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() personalDetails: IPersonalDetails[] = [];
}
