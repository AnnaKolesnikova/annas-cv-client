import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {
  Cv,
  Job,
  Response,
  PersonalDetails,
  Summary,
} from '../types/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);
  private jsonUrl =
    'https://api.jsonbin.io/v3/b/68079ccc8a456b79668edb1b/latest';
  private dataSignal = signal<Cv[]>([]);

  constructor() {
    this.getData();
  }

  private getData(): void {
    const headers = new HttpHeaders({
      'X-Master-Key':
        '$2a$10$Zxm8e6uJDV1t99Ki4i9OHOL54nJpTK4/G48QSx/CSHUhnk1XEAKtK',
    });

    this.http
      .get<Response>(this.jsonUrl, { headers })
      .subscribe((response: Response) => {
        this.dataSignal.set(response.record.cvs);
      });
  }

  get data() {
    return this.dataSignal;
  }

  getPersonalData(): PersonalDetails {
    return this.dataSignal()[0]?.personalDetails ?? null;
  }

  getSummary(): Summary {
    return this.dataSignal()[0]?.summary ?? null;
  }

  getWorkExperience(): Job[] {
    return this.dataSignal().flatMap((cv) => cv.workExperience);
  }
}
