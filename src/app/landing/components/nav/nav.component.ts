import { Component, Input } from '@angular/core';
import { MaterialModules } from '../../../shared/modules/material.module';
import { IPersonalDetails } from '../../types/cv.interface';
import { AsyncPipe } from '@angular/common';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [...MaterialModules, AsyncPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() personalData?: IPersonalDetails;
  isMobile = this.viewportService.isMobile$;

  links = ['About', 'Experience', 'Projects'];

  constructor(private viewportService: ViewportService) {}
}
