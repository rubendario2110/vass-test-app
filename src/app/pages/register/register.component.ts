import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    public registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  public submit() {
    const user = {
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      rol:"admin",
      sede: 1,
      ciudad: 1,
    };
    this.registerService.register(user).subscribe((data) => {
      this.registerService.setToken(data.token);
      this.router.navigateByUrl('/');
      alert("Registrado correctamente");
    });
  }
}
