import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() ptype: any;
  @Input() pitem: any;
  @Output() fromParent:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.fromParent.emit("from child component");
  }
  childFunction() {
    let data = {name:"keyboard", color:"black"};
    this.fromParent.emit(data);
  }


}
