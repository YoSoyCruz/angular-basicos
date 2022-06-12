import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor','Black Widow', 'Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('Borrando...');
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
  }
}

