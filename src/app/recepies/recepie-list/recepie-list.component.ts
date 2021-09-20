import { Component, OnInit } from '@angular/core';

import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie(
      'A test recipe',
      'A test description',
      'https://eadn-wc02-3894996.nxedge.io/cdn/wp-content/uploads/2018/01/pistachio-turmeric-rice-bowl6-1024x683.jpg'
    ),
    new Recepie(
      'A test recipe 2',
      'A test description 2',
      'https://eadn-wc02-3894996.nxedge.io/cdn/wp-content/uploads/2018/01/pistachio-turmeric-rice-bowl6-1024x683.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
