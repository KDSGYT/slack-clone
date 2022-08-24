import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepDiveComponent } from './deep-dive.component';

describe('DeepDiveComponent', () => {
  let component: DeepDiveComponent;
  let fixture: ComponentFixture<DeepDiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepDiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
