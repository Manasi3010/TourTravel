import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Service/dataservice.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: any;
  hotels: any;
  DialogRef!: MatDialogRef<LoginComponent>;
  constructor(private service: DataserviceService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.changebackground();
  }
  changebackground() {
    this.service.getBackgroundVideos().subscribe((data) => {
      this.videos = data[0].video_files;
      console.log(this.videos);
    });
  }

  hoteldetails() {
    this.service.getHoteldetails().subscribe((data: any) => {
      console.log(data);
    });
  }

  opendailog() {
    this.DialogRef = this.dialog.open(LoginComponent);
    console.log('mat dialog');
  }
}
