import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavigationList, NavigationListItem } from '../models/naviagation-list.model';
import { ActionType } from '../models/navigation-panel-action.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})

export class NavigationPanelComponent implements OnInit {
  listItems: Observable<NavigationList> = this.store.select(state => state.navigationList);

  constructor(
    private store: Store<{navigationList: NavigationList}>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: ActionType.GET_NAVIGATION_LIST})
  }

}
