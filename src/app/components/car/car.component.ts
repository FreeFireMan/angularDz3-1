import {Component, Input, OnInit} from '@angular/core';
import {InterfaceCars} from '../interface-cars/iteface-cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements InterfaceCars{
@Input()
  car;

  brand: string;
  color: string;
  id: number;
  model: string;
  power: number;
  year: number;


}
