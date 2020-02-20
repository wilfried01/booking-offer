import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _userAuthenticated = true;

  get userAuthenticated() {
    return this._userAuthenticated;
  }
  constructor() { }

  login() {
    this._userAuthenticated = true;
  }

  logout() {
    this._userAuthenticated = false;
  }
}
