import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourQuestionAnswersComponent } from './your-question-answers.component';

describe('YourQuestionAnswersComponent', () => {
  let component: YourQuestionAnswersComponent;
  let fixture: ComponentFixture<YourQuestionAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourQuestionAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourQuestionAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
