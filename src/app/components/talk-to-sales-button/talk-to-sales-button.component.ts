import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-to-sales-button',
  templateUrl: './talk-to-sales-button.component.html',
  styleUrls: ['./talk-to-sales-button.component.scss']
})
export class TalkToSalesButtonComponent implements OnInit {

  @Input() buttonColor: string = 'white'

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttonColor);
    
  }
  ngOnChange():void{
    console.log(this.buttonColor);
  }

}
