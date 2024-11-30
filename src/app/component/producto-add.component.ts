import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductoService } from "../services/producto.service";
import { Producto } from "../models/producto";

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [
        ProductoService
    ]
  })
export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.titulo = 'Crear un Productos';
        this.producto = new Producto(0,'','',0,'');
    }

    ngOnInit() {
        console.log('producto-add.component.ts cargado.');
    }

    onSubmit() {
        console.log('Component: crear producto.');
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                console.log("Respuesta: ",JSON.stringify(response));
                this._router.navigate(['/home']);
            }, 
            error => {
                console.log(<any>error);
            }
        )
        
    }
    
}  