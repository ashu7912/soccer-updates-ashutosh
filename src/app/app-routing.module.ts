import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocDashboardComponent } from './soc-dashboard/soc-dashboard.component';
import { SocFixturesComponent } from './soc-fixtures/soc-fixtures.component';
import { FixturesDataResolver } from './services/fixtures-data.resolver';

const routes: Routes = [
  {
    path: 'scorecard',
    component: SocDashboardComponent
  },
  {
    path: 'scorecard/:teamId',
    component: SocFixturesComponent,
    resolve: {fixturesData: FixturesDataResolver}
  },
  {
    path: '**',
    redirectTo: 'scorecard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
