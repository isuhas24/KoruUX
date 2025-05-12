import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getData() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }
}
