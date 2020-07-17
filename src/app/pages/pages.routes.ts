import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {titulo: 'Dashboard', descripcion: 'Esta es la descripción de Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress', descripcion: 'Esta es la descripción de Progress'} },
      { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas', descripcion: 'Esta es la descripción de Gráficas'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas', descripcion: 'Esta es la descripción de Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs', descripcion: 'Esta es la descripción de RxJs'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes del Tema', descripcion: 'Esta es la descripción de Ajustes'} },
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
];

export const PagesRoutingModule = RouterModule.forChild(pagesRoutes);
