import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  constructor(public likesCount:number, public isSelected:boolean) { }

  onClick($) {
    this.likesCount += (this.isSelected) ? -1 : 1;
    this.isSelected = !this.isSelected;

  }

}
