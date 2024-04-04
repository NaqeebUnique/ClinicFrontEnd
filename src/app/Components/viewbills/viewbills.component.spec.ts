import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbillsComponent } from './viewbills.component';

describe('ViewbillsComponent', () => {
  let component: ViewbillsComponent;
  let fixture: ComponentFixture<ViewbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewbillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
