import { HttpClient } from '@angular/common/http';
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
