import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';

const routes: Routes = [
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: '**', redirectTo: 'project-overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
