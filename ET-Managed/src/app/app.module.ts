import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NotificationsContainerComponent } from './components/site-info/notifications-container/notifications-container.component';
import { NotificationItemComponent } from './components/site-info/notifications-container/notification-item/notification-item.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {reducers} from './services/stores/index';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { NavigationEffects } from './services/stores/effects/navigation.effects';
import { NotificationEffects } from './services/stores/effects/notification.effects';
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
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
        maxAge: 25, 
        logOnly: environment.production
      }),
    HttpClientModule,
    EffectsModule.forRoot([NavigationEffects, NotificationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
