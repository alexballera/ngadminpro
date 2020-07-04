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
    this.colocarCheck();
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

  colocarCheck() {
    const selectores: any = this.document.getElementsByClassName('selector');

    const tema = this.ajustes.ajustes.tema;

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
