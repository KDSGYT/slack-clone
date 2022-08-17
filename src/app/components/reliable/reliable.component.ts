import { Component, OnInit } from '@angular/core';
import { GLOBALpurple } from 'src/assets/variables';

@Component({
  selector: 'app-reliable',
  templateUrl: './reliable.component.html',
  styleUrls: ['./reliable.component.scss']
})
export class ReliableComponent implements OnInit {
  public buttonColor = GLOBALpurple;
  constructor() { }

  ngOnInit(): void {
  }

}
