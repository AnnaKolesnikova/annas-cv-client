import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(
        map((result) => result.matches),
        distinctUntilChanged()
      )
      .subscribe((isMobile) => this.isMobileSubject.next(isMobile));
  }
}
