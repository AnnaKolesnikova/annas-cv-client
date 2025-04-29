import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {
  ICv,
  IJob,
  IResponse,
  IPersonalDetails,
  ISummary,
} from '../types/cv.interface';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl =
    'https://api.jsonbin.io/v3/b/68079ccc8a456b79668edb1b/latest';
  private dataSignal = signal<ICv[]>([]);

  constructor(private http: HttpClient) {
    this.getData();
  }

  private getData(): void {
    const headers = new HttpHeaders({
      'X-Master-Key':
        '$2a$10$Zxm8e6uJDV1t99Ki4i9OHOL54nJpTK4/G48QSx/CSHUhnk1XEAKtK',
    });

    this.http
      .get<IResponse>(this.jsonUrl, { headers })
      .subscribe((response: IResponse) => {
        this.dataSignal.set(response.record.cvs);
      });
  }

  get data() {
    return this.dataSignal;
  }

  getPersonalData(): IPersonalDetails {
    return this.dataSignal()[0]?.personalDetails ?? null;
  }

  getSummary(): ISummary {
    return this.dataSignal()[0]?.summary ?? null;
  }

  getWorkExperience(): IJob[] {
    return this.dataSignal().flatMap((cv) => cv.workExperience);
  }
}
