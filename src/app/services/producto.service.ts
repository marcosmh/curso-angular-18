import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/internal/operators/map";
import { catchError, Observable, throwError } from "rxjs";
import { Producto } from "../models/producto";
import { GLOBAL } from "./global";

@Injectable()
export class ProductoService {

    public url: string;
    
    constructor(
        private _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    
    getProductos(): Observable<any> {
        console.log(
            this._http.get<any>(this.url+'productos').subscribe(
                result => { console.log(result) },
                error => { console.log(error); })
        );

        return this._http.get<any>(this.url+'productos').pipe(
                map(response => {
                    console.log("Servicio Producto: ");
                    console.log(response);
                    return response;
                }));
    }


    addProducto(producto: Producto) {
        let json = JSON.stringify(producto);
        let headers = new HttpHeaders({
            'Content-type':'application/json'
        });
        
        return this._http.post<Producto>(this.url+'productos', json, { headers })
            .pipe(
              map(response => {
                console.log("El Producto se ha guardado correctamente:", response);
                return response;
              }),
              catchError(error => {
                console.log("Error al guardar el  producto: ", error);
                return error;
              })
            );
    }

}