import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProxyService } from '../proxy-service/proxy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;


  loading: boolean = false;
  constructor(private router: Router, private serviceProxy: ProxyService) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required])
    });
  }
  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.onSubmit()
    }, 1000);
  }
  onSubmit() {
    this.serviceProxy.getUserName(this.loginForm.value.username)
    localStorage.setItem("name", this.loginForm.value.username)
    this.router.navigate(["home-page"])
  }
}
