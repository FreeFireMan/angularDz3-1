import { Component } from '@angular/core';
import {arrayCars} from './arrayCars/cars';
import {InterfaceCars} from './components/interface-cars/iteface-cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements InterfaceCars{
  cars = arrayCars;

  brand: string;
  color: string;
  id: number;
  model: string;
  power: number;
  year: number;
}
