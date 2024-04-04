import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientfordoctorComponent } from './viewpatientfordoctor.component';

describe('ViewpatientfordoctorComponent', () => {
  let component: ViewpatientfordoctorComponent;
  let fixture: ComponentFixture<ViewpatientfordoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpatientfordoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewpatientfordoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
