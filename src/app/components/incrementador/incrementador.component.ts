import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;

  @Input('nombre') leyenda: string = 'Leyenda';

  constructor() {
    console.log('Leyenda ', this.leyenda);
    // console.log('Leyenda ', this.progreso)
  }

  ngOnInit(): void {
  }

  cambiarValor(val: number) {

    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + val;
  }

}
