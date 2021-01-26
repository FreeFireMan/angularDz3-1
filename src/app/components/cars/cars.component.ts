import { Component, OnInit } from '@angular/core';
import {arrayCars} from '../../arrayCars/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = arrayCars;

  constructor() { }

  ngOnInit(): void {
  }

}
