import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error', error),
      () => console.log('El observador terminó!')
    );

  }

  ngOnInit(): void {
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Help!');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('Filter', valor, index);
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        };
      })
    )
  }

}
