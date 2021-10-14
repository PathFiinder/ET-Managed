import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationContainerComponent } from './components/navigation-container/navigation-container.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NotificationsContainerComponent } from './components/navigation-container/notifications-container/notifications-container.component';
import { NotificationItemComponent } from './components/navigation-container/notifications-container/notification-item/notification-item.component';
import { UserInfoContainer } from './components/navigation-container/user-info-container/user-info-container';
import { UserInformationComponent } from './components/navigation-container/user-info-container/user-information/user-information.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { SystemInfoComponent } from './components/navigation-container/system-info/system-info.component';
import { DashboardComponent } from './components/main-content/dashboard-content/dashboard.component';
import { TasksComponent } from './components/main-content/tasks-content/tasks.component';
import { BudgetComponent } from './components/main-content/budget-content/budget.component';
import { ReportsComponent } from './components/main-content/reports-content/repots.component';
import { CalendarContentComponent } from './components/main-content/calendar-content/calendar-content.component';
import { NotFoundContentComponent } from './components/main-content/not-found-content/not-found-content.component';
import { SplashScreenStateService } from './services/splash-screen/splash-screen-state.service';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { systemDataReducer } from './services/stores/reducers/system-data.reducer';
import { SystemDataEffects } from './services/stores/effects/systame-data.effects';
import { DashboardReportsComponent } from './components/main-content/dashboard-content/dashboard-reports/dashboard-reports.component';
import { StackedLineChartComponent } from './components/utils/stacked-line-chart/stacked-line-chart.component';
import { CircularGaugeChartComponent } from './components/utils/circular-gauge-chart/circular-gauge-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DonutChartComponent } from './components/utils/donut-chart/donut-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationContainerComponent,
    NavigationPanelComponent,
    MainContentComponent,
    NotificationsContainerComponent,
    NotificationItemComponent,
    UserInfoContainer,
    UserInformationComponent,
    SystemInfoComponent,
    DashboardComponent,
    TasksComponent,
    BudgetComponent,
    ReportsComponent,
    CalendarContentComponent,
    NotFoundContentComponent,
    SplashScreenComponent,
    DashboardReportsComponent,
    StackedLineChartComponent,
    CircularGaugeChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({'system-data': systemDataReducer}),
    EffectsModule.forRoot([SystemDataEffects]),
    StoreDevtoolsModule.instrument({
        maxAge: 25, 
        logOnly: environment.production
      }),
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgApexchartsModule,
  ],
  providers: [SplashScreenStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
