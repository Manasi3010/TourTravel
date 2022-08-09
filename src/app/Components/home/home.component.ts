import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Service/dataservice.service';
import { LoginComponent } from '../login/login.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
    });
  }

  opendailog() {
    console.log('mat dialog');
    this.DialogRef = this.dialog.open(LoginComponent);
  }
}
