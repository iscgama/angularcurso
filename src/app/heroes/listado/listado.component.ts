import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Strange','Ironman','Thor','Wolverine'];
  borrado: string = '';

  BorrarHeroe () {
    this.borrado = this.heroes.shift() || '';
  }
}
