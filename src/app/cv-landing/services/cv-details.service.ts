import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICv } from '../types/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class CvDetailsService {
  httpClient = inject(HttpClient);
  cvSig = signal<ICv[]>([]);
  apiBaseUrl = 'http://localhost:3004/cv';

  getCV(): void {
    this.httpClient.get<ICv[]>(this.apiBaseUrl).subscribe((cv) => {
      console.log(cv);
      this.cvSig.set(cv);
    });
  }
}
