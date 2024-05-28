import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICv } from '../../cv-landing/types/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient = inject(HttpClient);
  apiUrl = 'http://localhost:3004';

  getAllCvDetails(): Observable<ICv[]> {
    return this.httpClient.get<ICv[]>(`${this.apiUrl}/cv`);
  }
}
