import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  sayHello() {
    console.log('hello there');
  }

  constructor() { }
}
