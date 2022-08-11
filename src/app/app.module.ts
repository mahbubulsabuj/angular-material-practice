import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//UI MODULES
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { PhaseComponent } from './components/phase/phase.component';
import { DisciplineComponent } from './components/discipline/discipline.component';
import { RecurringReportPresetComponent } from './components/recurring-report-preset/recurring-report-preset.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    PhaseComponent,
    DisciplineComponent,
    RecurringReportPresetComponent,
    ProjectOverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDividerModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
