import { Component } from '@angular/core';

@Component({
  selector: 'app-main-fitness',
  templateUrl: './main-fitness.component.html',
  styleUrls: ['./main-fitness.component.css']
})
export class MainFitnessComponent {
  trainerList = [
    {name:"Ivan",experience:"⭐⭐⭐",score:3},
    {name:"Koko",experience:"⭐⭐⭐",score:3},
    {name:"Joro",experience:"⭐⭐⭐",score:3}
  ];
}
