import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionPoolService implements OnInit { // implements OnInit {

  public yourCurrentScore: 0;
  public yourCurrentQuestion: 1;

  public totalQuestions: number = environment.questions.poolTotalToUse;

  public questionsData = [
    { 'id': 1, 'text': 'Question 1', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 1 },
    { 'id': 2, 'text': 'Question 2 - you can do i t', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 2 },
    { 'id': 3, 'text': 'Question 3 - whatever ', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 3 },
    { 'id': 4, 'text': 'Question 4', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 4 },
    { 'id': 5, 'text': 'Question 5 - who are you', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 1 },
    { 'id': 6, 'text': 'Question 6', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 2 },
    { 'id': 7, 'text': 'Question 7', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 3 },
    { 'id': 8, 'text': 'Question 8', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 4 },
    { 'id': 9, 'text': 'Question 9', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 1 },
    { 'id': 10, 'text': 'Question 10 - final number', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 2 },
    { 'id': 11, 'text': 'Question 11', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 3 },
    { 'id': 12, 'text': 'Question 12', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 4 },
    { 'id': 13, 'text': 'Question 13 - hello !', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 1 },
    { 'id': 14, 'text': 'Question 14', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 2 },
    { 'id': 15, 'text': 'Question 15 - gp', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 3 },
    { 'id': 16, 'text': 'Question 16', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 4 },
    { 'id': 17, 'text': 'Question 17', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 1 },
    { 'id': 18, 'text': 'Question 18', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 2 },
    { 'id': 19, 'text': 'Question 19', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 3 },
    { 'id': 20, 'text': 'Question 20 - finish you done it', 'answers': ['answer1', 'answer2', 'answer3', 'answer4'], 'answer': 4 }
];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    // Will work?
    this.http.get('./../api/questions.json').subscribe(data => {
      console.log(data);
    });
  }

  resetQuestions() {
    this.yourCurrentScore = 0;
    this.yourCurrentQuestion = 1;
  }

  nextQuestion() {
  }

  randomNumber() {
    const randomness = Math.floor(Math.random() * 20);

    return randomness;
  }

  getRandomQuestion() {
    return this.questionsData[this.randomNumber()];
  }


}
