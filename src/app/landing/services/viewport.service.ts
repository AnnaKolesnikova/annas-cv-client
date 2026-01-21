import { inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private isMobileSubject = new BehaviorSubject<boolean>(false);

  public isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();

  constructor() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(
        map((result) => result.matches),
        distinctUntilChanged()
      )
      .subscribe((isMobile) => this.isMobileSubject.next(isMobile));
  }
}
