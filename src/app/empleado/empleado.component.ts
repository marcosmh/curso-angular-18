import { Component } from "@angular/core";
import { Empleado } from "./empleado";


@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
    public titulo = 'Componente Empleados'
    public lista_empleados = 'Juan, Roberto, Jose, Pedro'
    public empleado!: Empleado;
    public trabajadores!:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor() {
        this.empleado = new Empleado('markcode',20,'Ing',true);
        this.trabajadores = [
            new Empleado('markdev',21,'Ing',true),
            new Empleado('thekid',20,'Dev',true),
            new Empleado('theeagle',20,'Net',true),
            new Empleado('sebas',20,'Net',true),
            new Empleado('charles',20,'Tec',false)
        ];

        this.trabajador_externo = false;
        this.color = 'blue';
        this.color_seleccionado = '#ccc';

    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.empleado.nombre +" - "+ this.empleado.edad +" - "+
            this.empleado.cargo +" - "+this.empleado.contratado);
        
        console.log("trabajador_externo: "+this.trabajador_externo);
        console.log("COLOR: "+this.color);

        //console.log(this.trabajadores);

        //this.trabajadores.forEach((e) => console.log(e));

        /*
        for(let empleado of this.trabajadores) {
            console.log(empleado);
        }*/
    }

    cambiarExterno(valor:boolean) {
        this.trabajador_externo = valor;
        console.log(this.trabajador_externo);        
    }

    logColorSeleccionado() {
        console.log(this.color_seleccionado);        
    }

}