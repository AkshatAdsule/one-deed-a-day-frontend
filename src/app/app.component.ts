import { navbarLink } from './navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'odad-ng';
  public links: navbarLink[] = [
    { name: 'Home', href: '' },
    { name: 'Register', href: 'register' },
    { name: 'Login', href: 'login' },
  ];
}
