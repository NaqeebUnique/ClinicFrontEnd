import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorincomeComponent } from './doctorincome.component';

describe('DoctorincomeComponent', () => {
  let component: DoctorincomeComponent;
  let fixture: ComponentFixture<DoctorincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorincomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
