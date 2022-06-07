import { Component, Input, OnInit } from '@angular/core';
import { BedTypes } from '../../../constants/BedTypes';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  bedTypes = BedTypes;

  @Input() estate;

  constructor() { }

  ngOnInit(): void {
  }

}
