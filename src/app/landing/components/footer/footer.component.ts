import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../shared/modules/material.module';
import { ViewportService } from '../../services/viewport.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...MaterialModules, AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly viewportService = inject(ViewportService);

  public isMobile = this.viewportService.isMobile$;
}
