import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { navigationListReducers } from './services/stores/navigation/navigation-panel.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SiteInfoComponent,
    NavigationPanelComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({navigationList: navigationListReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
