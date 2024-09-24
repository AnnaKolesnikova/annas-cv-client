import { Component, computed, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MaterialModules } from '../../../shared/modules/material.module';
import { ICv } from '../../types/cv.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [...MaterialModules],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // dataService = inject(DataService);

  // cv = computed(() => {
  //   return this.dataService.cvSig();
  // });

  // ngOnInit(): void {
  //   this.dataService.getCV();
  // }
  // Инициализация сигнала для хранения данных
  data = signal<ICv[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private dataService: DataService) {
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);
    this.dataService.getData().subscribe({
      next: (response) => {
        console.log(response);
        this.data.set(response.cvs); // set data via signal
        this.loading.set(false); // stop loading
      },
      error: (err) => {
        this.error.set('Loading data error');
        this.loading.set(false);
      },
    });
  }
}
