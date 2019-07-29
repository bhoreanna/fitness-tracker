import { Component, OnInit, Output, EventEmitter } from '@angular/core';


export interface Excecies {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})


export class NewTrainingComponent implements OnInit {
  @Output() startTraning: EventEmitter<any> = new EventEmitter();

  Excecieses: Excecies[] = [
    {value: 'crunches-0', viewValue: 'Crunches'},
    {value: 'touch-toes-1', viewValue: 'TouchToes'},
    {value: 'side-lunges-2', viewValue: 'SideLunges'},
    {value: 'burpees-2', viewValue: 'Burpees'}

  ];
  constructor() { }

  ngOnInit() {
  }


  onStartTraning(){

    this.startTraning.emit();
  }
}
