import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Linterna Verde',
    'Thor',
    'hawkeye',
    'Hulk',
  ];
  heroeBorrado: string = '';

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  borrarHeroe(): void {
    console.log('Borrando heroe..');
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
