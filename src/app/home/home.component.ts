import { Component } from "@angular/core";
import { RopaService } from "../service/ropa.service";
import internal from "stream";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {
    public titulo = 'Página Principal';
    public listado_ropa: Array<string> = [];
    public prenda_a_guardar:string = '';
    public indice:number = 0;

    constructor(
        private _ropaService: RopaService
    ) {}

    ngOnInit() {
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this._ropaService.prueba('Camiseta'));
        console.log(this.listado_ropa);
    }


    guadarPrenda() {
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = '';
    }

    eliminarPrenda(indice:number) {
        this._ropaService.deleteRopa(indice);
    }
}