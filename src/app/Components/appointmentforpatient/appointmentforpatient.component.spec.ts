import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentforpatientComponent } from './appointmentforpatient.component';

describe('AppointmentforpatientComponent', () => {
  let component: AppointmentforpatientComponent;
  let fixture: ComponentFixture<AppointmentforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentforpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
