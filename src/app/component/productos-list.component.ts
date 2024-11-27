import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductoService } from "../services/producto.service";

@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers: [
        ProductoService
    ]
  })
export class ProductosListComponent {
    public titulo: string;
    public productos: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.titulo = 'Listado de Productos';
    }

    ngOnInit() {
        console.log('productos-list.component.ts cargado.');

        //console.log(this._productoService.getProductos());
        this.listadoProductos();
    }

    listadoProductos() {
        this._productoService.getProductos().subscribe(
            result => {
                console.log("component productos: ");
                this.productos = result;
                console.log(this.productos);

                if(!this.productos) {
                    console.log("No se encontraron datos");
                }
            },
            error => {
                console.log(error);
            }
        )
    }
}