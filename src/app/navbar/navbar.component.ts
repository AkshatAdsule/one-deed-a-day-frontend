import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() links: navbarLink[];

  public loggedOutLinks: navbarLink[] = [
    { name: 'About', href: '' },
    { name: 'Register', href: 'register' },
    { name: 'Login', href: 'login' },
  ];

  public loggedInLinks: navbarLink[] = [
    { name: 'Home', href: 'home' },
    { name: 'Create', href: 'create' },
    { name: 'Logout', href: 'logout' },
  ];

  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}

export interface navbarLink {
  name: string;
  href: string;
}
