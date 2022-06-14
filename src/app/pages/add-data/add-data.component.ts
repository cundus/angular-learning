import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { IData } from 'src/app/models/data.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.name.invalid || this.email.invalid || this.phone.invalid) {
      return alert('Please fill all the fields');
    }

    this.dataService
      .addData({
        id: this.generateId(),
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        createdAt: this.generateDate(),
      } as IData)
      .subscribe((data) => {
        // console.log(data);
        this.location.back();
      });
  }

  generateId() {
    return Math.floor(Math.random() * 1000000);
  }

  generateDate() {
    let date = new Date();
    return date.toLocaleDateString();
  }
}
