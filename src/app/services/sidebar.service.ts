import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', },
        { titulo: 'ProgressBar', url: '/dashboard/progress', },
        { titulo: 'Gráficas', url: '/dashboard/graficas1', },
        { titulo: 'Configuraciones', url: '/dashboard/account-settings', },
        { titulo: 'Promesas', url: '/dashboard/promesas', },
        { titulo: 'RXJS', url: '/dashboard/rxjs', },
      ]
    }
  ];

  constructor() { }
}
