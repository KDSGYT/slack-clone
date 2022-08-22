import { Component, Input, OnInit } from '@angular/core';

@Component({

  // NOTE: if you put brackets to the name of the selector then you can reference them as follow:
  // https://www.querythreads.com/angular2-render-a-component-without-its-wrapping-tag/
  // you can also have multiples selectors for a component
  selector: '[app-talk-to-sales-button],app-talk-to-sales-button ',
  templateUrl: './talk-to-sales-button.component.html',
  styleUrls: ['./talk-to-sales-button.component.scss']
})
export class TalkToSalesButtonComponent implements OnInit {

  @Input() buttonColor: string = 'white'

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttonColor);

  }
  ngOnChange(): void {
    console.log(this.buttonColor);
  }

}
