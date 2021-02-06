import { Component, OnInit } from '@angular/core';
import { NavigationList } from '../models/naviagation-list.model';

let listItems = new Array<NavigationList>();

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})

export class NavigationPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
