import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMenuExpanded, selectSystemInfo } from 'src/app/services/stores/selectors/system-data.selector';
import { SystemInfo } from 'src/app/services/stores/types/systemData.model';
import { NavigationContainerComponent } from '../navigation-container.component';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.sass']
})
export class SystemInfoComponent implements OnInit {

  systemInfoData: SystemInfo;
  public isExpanded: Observable<boolean> = this.store.select(selectIsMenuExpanded)

  constructor(public navigationContainer: NavigationContainerComponent, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectSystemInfo).subscribe((systemInfo: SystemInfo) => this.systemInfoData = systemInfo)
  }

  closeSystemInfoButton(): void {
    this.navigationContainer.setSystemuttonToInactive();
  }
}
