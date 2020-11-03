import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SedeService } from 'src/app/service/sede.service';
@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  constructor(public registerSede : SedeService) { }
  form = new FormGroup({
    sede: new FormControl(''),
    ciudad: new FormControl(''),
  });
  ngOnInit(): void {
  }
  public submit() {
    const sede = { nombre: this.form.get('sede').value,ciudad: this.form.get('ciudad').value};
    this.registerSede.registerSede(sede).subscribe(
      (data) => {
        console.log(data);
        alert("Sede Creada correctamente");
      },
      (error) => {
        alert("error al crear ciudad");
        console.log(error);
      }
    );
  }

}
