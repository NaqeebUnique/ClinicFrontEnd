import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsforpatientComponent } from './billsforpatient.component';

describe('BillsforpatientComponent', () => {
  let component: BillsforpatientComponent;
  let fixture: ComponentFixture<BillsforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillsforpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillsforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
