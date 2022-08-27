import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './floatingNavbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public visible: Boolean = false;
  @Input() sticky: Boolean = false;
  // private scrollOffset:
  constructor() { }

  ngOnInit(): void {
    
  }

}
