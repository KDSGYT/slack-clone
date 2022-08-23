import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-feature], app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() videoSide: 'left' | 'right' = 'right';
  @Input() videoLink: string = '';
  @Input() sectionHeading: string = '';
  @Input() supportingText: string = ''
  @Input() learnMore = { linkName: '', URL: '' }
  @Input() videoStyle={};
  constructor() { }

  ngOnInit(): void {
    console.log(this.videoSide)
  }

}
