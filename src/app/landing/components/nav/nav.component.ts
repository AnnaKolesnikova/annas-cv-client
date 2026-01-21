import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MaterialModules } from '../../../shared/modules/material.module';
import { PersonalDetails } from '../../types/cv.interface';
import { AsyncPipe } from '@angular/common';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [...MaterialModules, AsyncPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  private readonly viewportService = inject(ViewportService);

  public personalData = input<PersonalDetails>();
  public isMobile = this.viewportService.isMobile$;
  public links = ['About', 'Experience', 'Projects'];
}
