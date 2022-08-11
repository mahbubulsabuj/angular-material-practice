import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringReportPresetComponent } from './recurring-report-preset.component';

describe('RecurringReportPresetComponent', () => {
  let component: RecurringReportPresetComponent;
  let fixture: ComponentFixture<RecurringReportPresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringReportPresetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurringReportPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
