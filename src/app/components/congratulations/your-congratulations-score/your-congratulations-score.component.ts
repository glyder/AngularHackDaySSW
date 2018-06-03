import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hack-your-congratulations-score',
  templateUrl: './your-congratulations-score.component.html',
  styleUrls: ['./your-congratulations-score.component.scss']
})
export class YourCongratulationsScoreComponent implements OnInit {

  @Input() score = 0;
  @Input() total = 10;

  @Input() show = true;

  @Output()
  clickedCongrats: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  updateSelected() {
    this.clickedCongrats.emit(true);
  }


}
