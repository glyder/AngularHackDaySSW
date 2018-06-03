import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hack-your-question',
  templateUrl: './your-question.component.html',
  styleUrls: ['./your-question.component.scss']
})
export class YourQuestionComponent implements OnInit {

  @Input() questionText = '';
  @Input() show = true;

  constructor() { }

  ngOnInit() {

  }

}
