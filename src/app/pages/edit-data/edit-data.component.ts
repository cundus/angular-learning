import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { IData } from 'src/app/models/data.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  data!: IData;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.dataService.getDataById(+params['id']).subscribe((data) => {
        this.name.setValue(data.name);
        this.email.setValue(data.email);
        this.phone.setValue(data.phone);
        this.data = data;
      });
    });
  }

  onSubmit() {
    if (this.name.invalid || this.email.invalid || this.phone.invalid) {
      return alert('Please fill all the fields');
    }

    // console.log(this.name.value, this.email.value, this.phone.value);
    // console.log(this.data);

    this.dataService
      .updateData({
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        id: this.data.id,
        createdAt: this.data.createdAt,
      })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
