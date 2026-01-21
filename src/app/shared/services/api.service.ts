import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../../landing/types/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3004';

  getAllCvDetails(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(`${this.apiUrl}/cv`);
  }
}
