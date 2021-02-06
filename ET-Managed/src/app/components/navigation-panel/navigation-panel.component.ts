import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavigationList, NavigationListItem } from '../models/naviagation-list.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})

export class NavigationPanelComponent implements OnInit {
  listItems: Observable<{navigationList: NavigationList}>;

  constructor(
    private store: Store<{navigationList: {navigationList: NavigationList}}>
  ) { }

  ngOnInit(): void {
    this.listItems = this.store.select('navigationList');
  }

}
