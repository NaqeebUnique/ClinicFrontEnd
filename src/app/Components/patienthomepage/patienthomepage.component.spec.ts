import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthomepageComponent } from './patienthomepage.component';

describe('PatienthomepageComponent', () => {
  let component: PatienthomepageComponent;
  let fixture: ComponentFixture<PatienthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatienthomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatienthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
