import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './recom-hotels.component.html',
  styleUrls: ['./recom-hotels.component.css'],
})
export class SearchComponent implements OnInit {
  cruiseLine = [
    { name: 'Azamara Club' },
    { name: 'Carnival Cruise' },
    { name: 'Celerity Cruise' },
    { name: 'Costal Cruise Line' },
    { name: 'Cruise & Maritime Voyag' },
    { name: 'Crystal Cruises' },
    { name: 'Cunard Line Ltd' },
    { name: 'Disney Crusie Line' },
    { name: 'Holland America Line' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
