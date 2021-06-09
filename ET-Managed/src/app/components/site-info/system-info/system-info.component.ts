import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSystemInfo } from 'src/app/services/stores/selectors/system-data.selector';
import { SystemInfo } from 'src/app/services/stores/types/systemData.model';
import { SiteInfoComponent } from '../site-info.component';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.sass']
})
export class SystemInfoComponent implements OnInit {

  systemInfoData: SystemInfo;

  constructor(private siteInfo: SiteInfoComponent, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectSystemInfo).subscribe((systemInfo: SystemInfo) => this.systemInfoData = systemInfo)
  }

  closeSystemInfoButton(): void {
    this.siteInfo.setSystemuttonToInactive();
  }
}
