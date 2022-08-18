import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Service/dataservice.service';
import { Flights } from 'src/app/Shared/model/Flight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: any;
  constructor(private service: DataserviceService) {}

  ngOnInit(): void {
    this.service.getFlights().subscribe((fli: any) => {
      this.flights = fli;
      console.log(this.flights[1].image);
    });
  }
}
