import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryForFreeButtonComponent } from './try-for-free-button.component';

describe('TryForFreeButtonComponent', () => {
  let component: TryForFreeButtonComponent;
  let fixture: ComponentFixture<TryForFreeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryForFreeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryForFreeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
