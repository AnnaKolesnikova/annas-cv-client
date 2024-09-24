import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICv } from '../types/cv.interface';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // httpClient = inject(HttpClient);
  // cvSig = signal<ICv[]>([]);
  // apiBaseUrl = 'http://localhost:3004/cv';

  // getCV(): void {
  //   this.httpClient.get<ICv[]>(this.apiBaseUrl).subscribe((cv) => {
  //     console.log(cv);
  //     this.cvSig.set(cv);
  //   });
  // }
  private jsonUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.jsonUrl).pipe(
      delay(2000) // Задержка на 2 секунды
    );
  }
}
