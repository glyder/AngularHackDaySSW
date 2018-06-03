import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hack-your-question-answers',
  templateUrl: './your-question-answers.component.html',
  styleUrls: ['./your-question-answers.component.scss']
})
export class YourQuestionAnswersComponent implements OnInit {

  @Input() answersData: any[];
  @Input() answer: number;
  @Input() show = true;

  answerID1 = 1;
  answerText1 = 'Answer 1 - ';

  answerID2 = 2;
  answerText2 = 'Answer 2 - ';

  answerID3 = 3;
  answerText3 = 'Answer';

  answerID4 = 4;
  answerText4 = 'Answer';

  myCount = -1;

  constructor() { }

  ngOnInit() {
  }

  countChange(event) {
    this.myCount = event;
  }

}
