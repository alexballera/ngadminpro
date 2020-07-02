import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit(): void {
  }

  cambiarColor(theme: string) {

    const url = `assets/css/colors/${theme}.css`;

    this.document.getElementById('theme').setAttribute('href', url);
  }

}
