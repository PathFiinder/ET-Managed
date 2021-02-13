import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.sass']
})
export class SiteInfoComponent implements OnInit {

  public isNotificationButtonActive: boolean = false;

  @ViewChild('notificationButton') notificationButton: ElementRef;
  @ViewChild('notificationPanel') notificationPanel: ElementRef;

  constructor(private renderer: Renderer2) 
    { 
    this.renderer.listen('window', 'click',(e:Event)=>{
    this.checkNotificationButtonStatus(e);
    })
  }

  ngOnInit(): void {
  }

  public onNotificationButtonClick(): void {
    this.isNotificationButtonActive = !this.isNotificationButtonActive;
  }

  private setNotificationButtonActiveToFalse() {
    this.isNotificationButtonActive = false;
  }

  private checkIfNotificationButtonOrPanelIsActive(e: Event) {
    if (!this.notificationButton.nativeElement.contains(e.target) && !this.notificationPanel.nativeElement.contains(e.target)) {
      this.setNotificationButtonActiveToFalse();
    }
  }

  private checkIfNotificationButtonIsActive(e: Event) {
    if (!this.notificationButton.nativeElement.contains(e.target)) {
      this.setNotificationButtonActiveToFalse();
    }
  }

  private checkNotificationButtonStatus(e: Event) {
    if (this.isNotificationButtonActive) {
      this.checkIfNotificationButtonOrPanelIsActive(e);
    } else {
      this.checkIfNotificationButtonIsActive(e);
    }
  }
}
