import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedIn: boolean;

  private loggedInUser: string;

  constructor() {}
  private setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public login(user: string) {
    this.loggedInUser = user;
    this.setLoggedIn(true);
  }

  public getLoggedInUser(): string {
    return this.loggedInUser;
  }
}
