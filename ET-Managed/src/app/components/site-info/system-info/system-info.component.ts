import { Component, OnInit } from '@angular/core';
import { SiteInfoComponent } from '../site-info.component';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.sass']
})
export class SystemInfoComponent implements OnInit {

  constructor(private siteInfo: SiteInfoComponent) { }

  ngOnInit(): void {
  }

  closeSystemInfoButton(): void {
    this.siteInfo.setSystemuttonToInactive();
  }
}
