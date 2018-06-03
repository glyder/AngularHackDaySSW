import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCongratulationsScoreComponent } from './your-congratulations-score.component';

describe('YourCongratulationsScoreComponent', () => {
  let component: YourCongratulationsScoreComponent;
  let fixture: ComponentFixture<YourCongratulationsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCongratulationsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCongratulationsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
