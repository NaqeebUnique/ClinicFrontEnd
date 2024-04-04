import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsforpatientComponent } from './reportsforpatient.component';

describe('ReportsforpatientComponent', () => {
  let component: ReportsforpatientComponent;
  let fixture: ComponentFixture<ReportsforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsforpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
