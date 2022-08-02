import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public anyVariable: any;

  show: boolean = false;
  LogForm!: FormGroup;
  Register!: FormGroup;
  isFormValid = false;
  areCredentialsInvalid = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthserviceService,
    private router: Router
  ) {}
  submit() {
    if (this.LogForm.valid) {
      this.auth.login(this.LogForm.value).subscribe(
        (result: any) => {
          console.log(result);
          this.router.navigate(['/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
  clear() {
    this.show = true;
  }

  submitReg() {
    console.log(this.Register.getRawValue());
  }
  ngOnInit(): void {
    this.LogForm = this.fb.group({
      username: [''],
      password: [''],
    });
    this.Register = this.fb.group({
      email: [''],
      name: [''],
      password: [''],
      confirmpass: [''],
    });
  }
}
