import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCurrentSummaryComponent } from './question-current-summary.component';

describe('QuestionCurrentSummaryComponent', () => {
  let component: QuestionCurrentSummaryComponent;
  let fixture: ComponentFixture<QuestionCurrentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCurrentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCurrentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
