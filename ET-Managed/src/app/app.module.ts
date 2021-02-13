import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { navigationListReducers } from './services/stores/navigation/navigation-panel.reducers';
import { notificationsListReducers } from './services/stores/notifications/notifications-list.reducers';
import { NotificationsContainerComponent } from './components/site-info/notifications-container/notifications-container.component';
import { NotificationItemComponent } from './components/site-info/notifications-container/notification-item/notification-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteInfoComponent,
    NavigationPanelComponent,
    MainContentComponent,
    NotificationsContainerComponent,
    NotificationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({navigationList: navigationListReducers,
      notificationList: notificationsListReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
