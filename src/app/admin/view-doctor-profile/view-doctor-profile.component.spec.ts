import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorProfileComponent } from './view-doctor-profile.component';

describe('ViewDoctorProfileComponent', () => {
  let component: ViewDoctorProfileComponent;
  let fixture: ComponentFixture<ViewDoctorProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDoctorProfileComponent]
    });
    fixture = TestBed.createComponent(ViewDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
