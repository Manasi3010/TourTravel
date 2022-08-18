import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './recom-hotels.component.html',
  styleUrls: ['./recom-hotels.component.css'],
})
export class SearchComponent implements OnInit {
  Hotel: any;
  HotelDetails: any;
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
  constructor(private fb: FormBuilder) {
    this.HotelDetails = this.fb.group({
      Destination: new FormControl(),
      chcekin: new FormControl(),
      chcekout: new FormControl(),
      rooms: new FormControl(),
      adults: new FormControl(),
      kids: new FormControl(),
    });
  }

  ngOnInit(): void {}

  submitHotel() {
    console.log(this.HotelDetails.getRawValue());
  }
}
