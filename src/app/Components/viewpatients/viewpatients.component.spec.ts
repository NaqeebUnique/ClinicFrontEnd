import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientsComponent } from './viewpatients.component';

describe('ViewpatientsComponent', () => {
  let component: ViewpatientsComponent;
  let fixture: ComponentFixture<ViewpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
