import { race } from 'rxjs/internal/operators';
import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuestionPoolService } from './services/question-pool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trivia App';

  // ===========================
  // Flags
  page1 = true;
  page2 = false;

  // ===========================
  // Question Count Summary
  currentQuestionsCount = 1;
  totalQuestionsCount = 10;
  showQuestionCurrentSummary = true;

  // ===========================
  // Question
  nextQuestionID = 1;
  nextQuestionText = 'What sort of beast car does Adam drive ?';

  nextAnswers = ['Holden', 'Ford', 'Tesla', 'WRX Sti'];
  nextAnswer = 3;

  showQuestion = true;

  // ===========================
  // Answers
  showQuestionAnswers = true;

  // ===========================
  // Congratulations
  showCongratulations = true;
  yourCurrentScore = 0;

  constructor(private _questionPoolService: QuestionPoolService) {  }


  clickPage1() {
    this.page1 = true;
    this.page2 = false;
  }

  clickPage2() {
    this.page1 = false;
    this.page2 = true;
  }

  resetPage() {
    this.clickPage1();

    this.currentQuestionsCount = 1;

    this.nextQuestionID = 1;
    this.nextQuestionText = 'What sort of beast car does Adam drive ?';

     this.nextAnswers = ['Holden', 'Ford', 'Tesla', 'WRX Sti'];
    this.nextAnswer = 3;
  }

  nextQuestion() {
    const question = this._questionPoolService.getRandomQuestion();


    this.nextQuestionID = question.id;
    this.nextQuestionText = question.text;

    this.nextAnswers = question.answers;
    this.nextAnswer = question.answer;

    this.currentQuestionsCount += 1;

    if (this.currentQuestionsCount >= 10) {
      this.clickPage2();
    }
  }

  congratsChanged(event) {
    this.resetPage();
  }


}
