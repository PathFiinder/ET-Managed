import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNavigationList, selectCurrentUser, selectIsMenuExpanded } from 'src/app/services/stores/selectors/system-data.selector';
import { LoggedUser, NavigationItem } from 'src/app/services/stores/types/systemData.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})

export class NavigationPanelComponent implements OnInit{

  listItems: Observable<NavigationItem[]> = this.store.select(selectNavigationList)
  userInfo: Observable<LoggedUser> = this.store.select(selectCurrentUser);

  isExpanded: Observable<boolean> = this.store.select(selectIsMenuExpanded)

  constructor(private store: Store) { 

  }

  ngOnInit(): void {
  }
}
