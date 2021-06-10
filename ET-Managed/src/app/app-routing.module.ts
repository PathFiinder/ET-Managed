import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/main-content/budget-content/budget.component';
import { CalendarContentComponent } from './components/main-content/calendar-content/calendar-content.component';
import { ReportsComponent } from './components/main-content/reports-content/repots.component';
import { NotFoundContentComponent } from './components/main-content/not-found-content/not-found-content.component';
import { DashboardComponent } from './components/main-content/dashboard-content/dashboard.component';
import { TasksComponent } from './components/main-content/tasks-content/tasks.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'calendar', component: CalendarContentComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundContentComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
