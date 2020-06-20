import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-donas',
  templateUrl: './grafico-donas.component.html',
  styleUrls: ['./grafico-donas.component.scss']
})
export class GraficoDonasComponent implements OnInit {
  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
