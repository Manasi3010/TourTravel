import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  @Inject(MAT_DIALOG_DATA) public anyVariable: any;
  ngOnInit(): void {}
}
