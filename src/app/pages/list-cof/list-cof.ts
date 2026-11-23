import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-list-cof',
  imports: [FormsModule, CommonModule],
  templateUrl: './list-cof.html',
  styleUrl: './list-cof.css',
})
export class ListCof {
  searchTitle: string;
  list: Conference[];
  constructor() {
  }
  ngOnInit() {
    this.list = [
      {
        title: 'Conference Angular',
        description: 'web dev conference and workshop',
        date: '12-06-2026',
        nbrMax: 20,
        nbrReservation: 10,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEuEEJ2EjIT8LmBrAW7DX-1UZMNOHsHp6QoOsw_08Jg&s=10'
      },
      {
        title: 'Conference react',
        description: 'web dev conference and workshop',
        date: '12-06-2026',
        nbrMax: 20,
        nbrReservation: 20,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10'}
    ];
  } 
  participate(conf: Conference):void {
    if (conf.nbrMax - conf.nbrReservation > 0) {
      conf.nbrReservation++;
    }}
  searchConferences(): Conference[] {
    if (!this.searchTitle) {
      return this.list;
    }
    return this.list.filter(conf => conf.title.toLowerCase().includes(this.searchTitle.toLowerCase()));
  }

}
