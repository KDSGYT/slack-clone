import { Component, OnInit } from '@angular/core';
import { GLOBALpurple } from 'src/assets/variables';

@Component({
  selector: 'app-reliable',
  templateUrl: './reliable.component.html',
  styleUrls: ['./reliable.component.scss']
})

export class ReliableComponent implements OnInit {
  public buttonColor = GLOBALpurple;
  public buttonHeight = ''
  public numbersWithText = [
    {
      number: 85,
      supportingText: 'of users say Slack has improved communication*'
    },
    {
      number: 86,
      supportingText: 'feel their ability to work remotely has improved*'
    },
    {
      number: 89,
      supportingText: 'feel more connected to their teams*'
    }

  ]
  public stylesForSalesButton = {
    // 'font-size':'20px
    // border:'2px solid black'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
