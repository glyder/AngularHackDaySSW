import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// 1
import { QuestionCurrentSummaryComponent } from './components/questions/question-current-summary/question-current-summary.component';

// 2
import { YourQuestionComponent } from './components/questions/your-question/your-question.component';

// 3
import { YourQuestionAnswersComponent } from './components/answers/your-question-answers/your-question-answers.component';
import { AnswerCardComponent } from './components/answers/answer-card/answer-card.component';

// 4
// tslint:disable-next-line:max-line-length
import { YourCongratulationsScoreComponent } from './components/congratulations/your-congratulations-score/your-congratulations-score.component';


@NgModule({
  declarations: [
    AppComponent,
    // 1
    QuestionCurrentSummaryComponent,
    // 2
    YourQuestionComponent,
    // 3
    YourQuestionAnswersComponent,
    AnswerCardComponent,
    // 4
    YourCongratulationsScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
