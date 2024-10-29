import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
})
export class FrutaComponent {
    public nombre_componente = 'Componente de Fruta'
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia'
    public nombre:string = 'markcode'
    public edad:number = 30
    public mayorEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albañil','Fontanero'];
    public variasCosas:Array<any> = ['Rock',66,true];
    comodin:any = 'Cualquier cosa';


    constructor() {
        console.log("Soy el constructor de FrutaComponent");
        console.log(this.trabajos);
        console.log(this.listado_frutas = 'Mamey','Fresa','Piña');
        console.log(this.edad = 20);
        console.log(this.mayorEdad = false);
        console.log(this.comodin = ['1',2,'3']);
        console.log(this.comodin = 'OK');
        
    }

    ngOnInit() {
        this.holaMundo(this.nombre);
        this.cambiarEdad(28);
        //alert(this.nombre + " " +this.edad);

        // Variables
        var uno = 8;
        var dos = 16;

        if(uno == 8) {
            console.log("dos= " + dos);

            let uno = 3;
            var dos = 88;

            console.log("Dentro del if: " + uno+" - " + dos);
            console.log("dos= " + dos);
        }

        console.log("Fuera del if: " + uno+ " - " + dos);
    }

    holaMundo(nombre:string) {
        console.log('holaMundo ' +  nombre);
        console.log('holaMundo');


    }

    cambiarNombre() {
        this.nombre = 'markDeveloper';
    }

    cambiarEdad(edad:number) {
        this.edad = edad;
    }


}