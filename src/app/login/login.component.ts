import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.+[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  onSubmit() {
    const emailField: string = this.loginForm.controls['email'].value;
    const passwordField: string = this.loginForm.controls['password'].value;
    if (emailField === 'anasselbaz0@gmail.com' && passwordField === 'aaa') {
      console.log('Login successful');
      this.router.navigateByUrl('/search');
    } else {
      console.log('Login failed');
      this.router.navigateByUrl('/');
    }
  }

}
