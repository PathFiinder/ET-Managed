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
import { UserInfoContainer } from './components/site-info/user-info-container/user-info-container';
import { UserInformationComponent } from './components/site-info/user-info-container/user-information/user-information.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {reducers} from './services/stores/index';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { NavigationEffects } from './services/stores/effects/navigation.effects';
import { NotificationEffects } from './services/stores/effects/notification.effects';
import { UserInfoEffects } from './services/stores/effects/userInfo.effect';
import { SystemInfoComponent } from './components/site-info/system-info/system-info.component';
import { OverviewComponent } from './components/main-content/overview-content/overview.component';
import { TasksComponent } from './components/main-content/tasks-content/tasks.component';
import { BudgetComponent } from './components/main-content/budget-content/budget.component';
import { ChartsComponent } from './components/main-content/charts-content/charts.component';
import { CalendarContentComponent } from './components/main-content/calendar-content/calendar-content.component';
import { NotFoundContentComponent } from './components/main-content/not-found-content/not-found-content.component';
import { SplashScreenStateService } from './services/splash-screen/splash-screen-state.service';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    SiteInfoComponent,
    NavigationPanelComponent,
    MainContentComponent,
    NotificationsContainerComponent,
    NotificationItemComponent,
    UserInfoContainer,
    UserInformationComponent,
    SystemInfoComponent,
    OverviewComponent,
    TasksComponent,
    BudgetComponent,
    ChartsComponent,
    CalendarContentComponent,
    NotFoundContentComponent,
    SplashScreenComponent
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
    EffectsModule.forRoot([NavigationEffects, NotificationEffects, UserInfoEffects])
  ],
  providers: [SplashScreenStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
