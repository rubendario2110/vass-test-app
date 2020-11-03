import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private readonly router: Router,
    public registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  public submit() {
    const user = { email: this.form.get('email').value, password: this.form.get('password').value };
    this.registerService.login(user).subscribe(
      (data) => {
        console.log(data);
        this.registerService.setToken(data.token);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
