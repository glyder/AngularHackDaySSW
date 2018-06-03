import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hack-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent implements OnInit {

  @Input() AnswerText: string;
  @Input() AnswerID: number;

  @Output()
  answerSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  updateSelected() {
    this.answerSelected.emit(this.AnswerID);
  }

}
