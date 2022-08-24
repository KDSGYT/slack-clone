import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep-dive',
  templateUrl: './deep-dive.component.html',
  styleUrls: ['./deep-dive.component.scss']
})
export class DeepDiveComponent implements OnInit {

  public cardInfo = [
    {
      imageLink: 'img-promo-02.jpg',
      imageText: 'Resource',
      heading: 'See how others are building their digital HQ',
      linkName: 'READ MORE'
    },
    {
      imageLink: 'img-promo-03.jpg',
      imageText: 'Webinar',
      heading: 'Embracing a digital-frist approach to work',
      linkName: 'WATCH NOW'
    },
    {
      imageLink: 'img-promo-04.jpg',
      imageText: 'E-book',
      heading: 'Reinventing work: New imperatives for the future of working.',
      linkName: 'GET E-BOOK'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
