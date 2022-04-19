import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAllUser() {
    return [
      {
        name: "John",
        age:32,
        email:"john@email.com"
      },
      {
        name: "David",
        age:30,
        email:"David@email.com"
      },
      {
        name: "Jack",
        age:20,
        email:"jack@email.com"
      },
    ]
  }
}
