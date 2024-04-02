import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgridComponent } from './docgrid.component';

describe('DocgridComponent', () => {
  let component: DocgridComponent;
  let fixture: ComponentFixture<DocgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
