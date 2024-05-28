import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLandingComponent } from './cv-landing.component';

describe('CvLandingComponent', () => {
  let component: CvLandingComponent;
  let fixture: ComponentFixture<CvLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
