import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public descripcion: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router,
              private title: Title,
              private meta: Meta,
              ) {

    this.tituloSubs$ = this.getDataRoute();
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    ).subscribe(({titulo, descripcion}) => {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.title.setTitle(titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.descripcion
      };

      this.meta.updateTag(metaTag);
    });
  }
}
