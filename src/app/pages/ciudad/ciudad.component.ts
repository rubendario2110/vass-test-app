import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CiudadService } from 'src/app/service/ciudad.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  form = new FormGroup({
    ciudad: new FormControl(''),
  });
  constructor(public registerCiudad : CiudadService) { }

  ngOnInit(): void {
  }

  public submit() {
    const ciudad = { nombre: this.form.get('ciudad').value};
    this.registerCiudad.registerCiudad(ciudad).subscribe(
      (data) => {
        console.log(data);
        alert("Ciudad Creada correctamente");
      },
      (error) => {
        alert("error al crear ciudad");
        console.log(error);
      }
    );
  }

}
