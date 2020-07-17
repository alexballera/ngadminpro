import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() btnClass: string = 'btn btn-primary';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onChanges(newValue: number) {
    // const elemHtml = document.getElementsByName('progreso')[0];
    // console.log(this.txtProgress)

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHtml.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
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

    this.cambioValor.emit(this.progreso);
  }
}
