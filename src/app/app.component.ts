import { Component } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorialProject';
  name = 'Learning Points';
  txt="";
  getChannel(channelname: String) {
    alert( channelname );
  }
  getName(val : any) {
    this.name = val;
    console.warn(val)
  }

  number1=0
  number2=0
  sum=0
  getSum(num1: any, num2: any) {
    // this.sum = num1 + num2;
    this.sum = parseFloat(num1) + parseFloat(num2);
  }

  eventHandling(val:any) {
    console.warn(val);
  }

  success="success";
  error="error";
  underline="underline";
  hasError=true;
  multiClass=["success", "underline"];
  conditionMultiClass={
    "success": !this.hasError,
    "error": this.hasError
  }

  textColor="green";
  multiselect = {
    color:'blue',
    textDecoration:'underline',
    fontWeight:'bold'
  }

  age=25;
  color="green";

  nameList = ["Jack", "Jane", "David","Tom"];
  users = [
    {
      name: "Jack",
      age: 30
    },
    {
      name: "Jon",
      age: 20
    },
    {
      name: "Lan",
      age: 10
    },
    {
      name: "Harold",
      age: 40
    }
  ]

  type="Computer Parts";
  data = [{name:'keyboard', color:'black'}];
  productName = '';
  productColor = '';
  fromParent(data:any) {
    this.productName = data.name;
    this.productColor = data.color;
    console.log(data);
  }

  amount=35.6265464646

  number=3;

  allUsers;
  constructor(private usersSer: UsersService) {
    this.allUsers=usersSer.getAllUser();
  }
}
