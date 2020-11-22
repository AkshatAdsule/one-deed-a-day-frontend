import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  public onSubmit(event: Event) {
    this.apiService
      .register(this.email, this.username, this.password)
      .toPromise()
      .then((res) => {
        this.userService.login(this.username);
        this.router.navigateByUrl('/home');
        console.log(res);
      })
      .catch((error) => {
        this.router.navigateByUrl('/register');
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.apiService.getDeeds();
  }
}
