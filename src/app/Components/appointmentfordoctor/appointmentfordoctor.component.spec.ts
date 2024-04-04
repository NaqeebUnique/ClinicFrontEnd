import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentfordoctorComponent } from './appointmentfordoctor.component';

describe('AppointmentfordoctorComponent', () => {
  let component: AppointmentfordoctorComponent;
  let fixture: ComponentFixture<AppointmentfordoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentfordoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentfordoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
