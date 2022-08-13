import { Component, OnInit } from '@angular/core';

export type featureData =
  {
    videoLink: string,
    videoSide: 'left' | 'right',
    sectionHeading: string,
    supportingText: string,
    learnMore: {
      linkName: string,
      URL: ''
    }
  };

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})


export class FeaturesComponent implements OnInit {

  public brands: Array<string> = [
    'airbnb-logo',
    'logo-nasa',
    'uber',
    'target-logo',
    'nyt',
    'logo-etsy'
  ]

  public videos: Array<featureData> = [
    {
      videoLink: 'connectedness.mp4',
      videoSide: 'left',
      sectionHeading: 'Bring your team together',
      supportingText: 'At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.',
      learnMore: {
        linkName: 'Learn more about channels',
        URL: ''
      }
    },
    {
      videoLink: 'flexibility.mp4',
      videoSide: 'right',
      sectionHeading: 'Choose how you want to work',
      supportingText: 'In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.',
      learnMore: {
        linkName: 'Learn more about flexible communication',
        URL: ''
      }
    },
    {
      videoLink: 'speed.mp4',
      videoSide: 'left',
      sectionHeading: 'Move faster with your tools in one place',
      supportingText: 'With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.',
      learnMore: {
        linkName: 'Learn more about the Slack platform',
        URL: ''
      }
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
