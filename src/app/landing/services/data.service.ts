import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICv, IJob, IResponse } from '../types/cv.interface';
import { delay, map, Observable } from 'rxjs';

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
  private dataSignal = signal<ICv[]>([]); //all data

  constructor(private http: HttpClient) {
    this.getData();
  }

  private getData(): void {
    this.http
      .get<IResponse>(this.jsonUrl)
      .pipe(delay(2000))
      .subscribe((response: IResponse) => {
        this.dataSignal.set(response.cvs);
      });
  }

  get data() {
    return this.dataSignal;
  }

  getWorkExperience(): IJob[] {
    return this.dataSignal().flatMap((cv) => cv.workExperience);
  }
}
