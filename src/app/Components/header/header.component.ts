import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() log = new EventEmitter();
  DialogRef!: MatDialogRef<LoginComponent>;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('This is header Component');
  }

  openDailog() {
    this.log.emit();
  }
}
