import { Component, Input, OnInit } from '@angular/core';
import { GLOBALpurple } from 'src/assets/variables';

@Component({
  selector: '[app-try-for-free-button],app-try-for-free-button ',
  templateUrl: './try-for-free-button.component.html',
  styleUrls: ['./try-for-free-button.component.scss']
})
export class TryForFreeButtonComponent implements OnInit {
  @Input() backgroundColor: string = 'white';
  // buttonColor: string = this.backgroundColor!=='white' ? 'white': GLOBALpurple;
  @Input() buttonColor: string = GLOBALpurple;
  
  constructor() {

  }

  ngOnInit(): void {
  }

}
