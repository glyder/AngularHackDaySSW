import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hack-question-current-summary',
  templateUrl: './question-current-summary.component.html',
  styleUrls: ['./question-current-summary.component.scss']
})
export class QuestionCurrentSummaryComponent implements OnInit {

  @Input() currentQuestion = 0;
  @Input() totalQuestions = 10;
  @Input() show = true;

  constructor() {

  }

  ngOnInit() {

  }

}
