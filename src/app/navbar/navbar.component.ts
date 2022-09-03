import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { GLOBALpurple } from 'src/assets/variables';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss',
    './floatingNavbar.component.scss',
    './tabletView.navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public visible: Boolean = false;
  @Input() public sticky: Boolean = false;
  private thresholdOffsetValue: number = 400;
  public talkToSalesButtonColor: string = GLOBALpurple;
  // public tryForFreeButtonColor: string = 
  constructor() {

  }

  // This cahnges the state to visible or not visible when the users scrolls the page.

  /**
   * Functioning: when the user scrolls the page th pageoffsetvalue is changes. ( a global varaible.) 
   * we use this event listener to keep an eye on the scroll offsetvalue and when the value is more 
   * than a certain value the navbar becomes visible otherwise stays hidden.
   */
  @HostListener('window:scroll')
  private handleScroll() {
    if (window.pageYOffset >= this.thresholdOffsetValue) {
      this.visible = true;
    } else if (window.pageYOffset < this.thresholdOffsetValue) {
      this.visible = false;
      
    }
  }

  ngOnInit(): void {

  }

}
