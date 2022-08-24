import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imageLink:string = ''
  @Input() imageText:string = ''
  @Input() heading:string = ''
  @Input() linkName:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
