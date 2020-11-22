import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  onPress() {
    this.apiService
      .login(this.username, this.password)
      .toPromise()
      .then((res) => {
        this.userService.login(this.username);
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {}
}
