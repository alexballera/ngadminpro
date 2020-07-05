import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subsciption: Subscription;

  constructor() {
    this.subsciption = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error', error),
      () => console.log('El observador terminó!')
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
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
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
