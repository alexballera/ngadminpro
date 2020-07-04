import { SettingsService } from './../../services/settings.service';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document,
              public ajustes: SettingsService) { }

  ngOnInit(): void {
  }

  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);

    this.ajustes.aplicarTema(tema);

  }

  aplicarCheck(link: any) {
    const selectores: any = this.document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
