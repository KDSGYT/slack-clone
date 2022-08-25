import { Component, OnInit } from '@angular/core';
import { FooterList } from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public lists: Array<FooterList> = [
    {
      listHeading:'WHY SLACK ?',
      listItems:[
        'Slack vs. Email',
        'Channels',
        'Engagement',
        'Scale',
        'Watch the Demo'
      ]
    },
    {
      listHeading: 'PRODUCT',
      listItems:[
        'Features',
        'Integrations',
        'Enterprise',
        'Solutions'
      ]
    },
    {
      listHeading:'Pricing',
      listItems:[
        'Plans',
        'Paid vs. Free'
      ]
    },
    {
      listHeading:'RESOURCES',
      listItems:[
        'Partners',
        'Developers',
        'Community',
        'Apps',
        'Blog',
        'Help Center',
        'Events'
      ]
    },
    {
      listHeading: 'COMPANY',
      listItems:[
        'About Us',
        'Leadership',
        'Investor Relations',
        'News',
        'Media Kit',
        'Careers'
      ]
    }
  ]

  public miscMenuItems: Array<String> = [
    'Status',
    'Privacy',
    'Terms',
    'Cookie Preferences',
    'Contact Us',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
