import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isAcceso: boolean = false;
  public setUser: any;
  public setPswd: any;


  public formUser: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validaAcceso();

    this.formUser = this.fb.group({
      user: ['', Validators.required],
      pswd: ['', Validators.required]
    })
  }

  public validaAcceso() {

    this.setUser = localStorage.getItem('User');
    this.setPswd = localStorage.getItem('Pswd');

    if (this.setUser && this.setPswd) {
      this.isAcceso = true;
    }

  }


  public onsubmit(obj: any) {
    localStorage.setItem('User', 'Admin');
    localStorage.setItem('Pswd', '1234');

    this.setUser = localStorage.getItem('User');
    this.setPswd = localStorage.getItem('Pswd');
    this.isAcceso = this.setUser === 'Admin' && this.setPswd === '1234' ? true : false;
  }

  public firstName() {
    return this.formUser.get('firstname');
  }

}
