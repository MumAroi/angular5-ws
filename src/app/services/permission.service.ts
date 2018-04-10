import { Injectable } from '@angular/core';
import * as decode from 'jwt-decode';

@Injectable()
export class PermissionService {

  constructor() { }

  getPermission() {
    return  decode(localStorage.getItem('token')).user;
  }

}
