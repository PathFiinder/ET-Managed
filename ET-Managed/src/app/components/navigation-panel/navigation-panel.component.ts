import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNavigationList } from 'src/app/services/stores/selectors/system-data.selector';
import { NavigationItem } from 'src/app/services/stores/types/systemData.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})

export class NavigationPanelComponent{

  listItems: Observable<NavigationItem[]> = this.store.select(selectNavigationList)
  
  constructor(private store: Store) { 
  }
}
