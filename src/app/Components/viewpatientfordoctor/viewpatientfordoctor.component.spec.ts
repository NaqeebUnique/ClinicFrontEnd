import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientsfordoctorComponent } from './viewpatientfordoctor.component';

describe('ViewpatientfordoctorComponent', () => {
  let component: ViewpatientsfordoctorComponent;
  let fixture: ComponentFixture<ViewpatientsfordoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpatientsfordoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewpatientsfordoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
