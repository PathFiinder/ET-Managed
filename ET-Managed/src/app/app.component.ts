import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSystemData } from './services/stores/actions/system-data.actions';
import { selectIsMenuExpanded } from './services/stores/selectors/system-data.selector';
import { SystemData } from './services/stores/types/systemData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ET Managed';
  isNavigationPanelExpanded: Observable<boolean> = this.store.select(selectIsMenuExpanded);

  notificationsList: Observable<SystemData> = 
  this.store.select(state => state.systemData)

  constructor(private store: Store<{systemData: SystemData}>) {
    this.store.dispatch(getSystemData());
  }

  
}
