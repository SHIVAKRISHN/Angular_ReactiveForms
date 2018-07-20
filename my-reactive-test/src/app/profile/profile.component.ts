import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }


  profileForm= new FormGroup({

    FirstName : new FormControl(''),
    LastName : new FormControl('')
  })



}
