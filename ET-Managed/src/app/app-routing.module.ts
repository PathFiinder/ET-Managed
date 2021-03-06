import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/main-content/budget-content/budget.component';
import { CalendarContentComponent } from './components/main-content/calendar-content/calendar-content.component';
import { ChartsComponent } from './components/main-content/charts-content/charts.component';
import { NotFoundContentComponent } from './components/main-content/not-found-content/not-found-content.component';
import { OverviewComponent } from './components/main-content/overview-content/overview.component';
import { TasksComponent } from './components/main-content/tasks-content/tasks.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'calendar', component: CalendarContentComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: '**', component: NotFoundContentComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
