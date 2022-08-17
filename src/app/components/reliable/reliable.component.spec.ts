import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableComponent } from './reliable.component';

describe('ReliableComponent', () => {
  let component: ReliableComponent;
  let fixture: ComponentFixture<ReliableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
