import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToSalesButtonComponent } from './talk-to-sales-button.component';

describe('TalkToSalesButtonComponent', () => {
  let component: TalkToSalesButtonComponent;
  let fixture: ComponentFixture<TalkToSalesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkToSalesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToSalesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
