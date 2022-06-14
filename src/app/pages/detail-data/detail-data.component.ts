import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IData } from '../../models/data.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.css'],
})
export class DetailDataComponent implements OnInit {
  data: IData = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    createdAt: '',
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {
    this.route.params.subscribe((params) => {
      this.dataService.getDataById(+params['id']).subscribe((data) => {
        this.data = data;
        // console.log(data);
      });
    });
  }

  ngOnInit(): void {}

  onDelete(): void {
    // console.log(this.data.id);

    if (confirm('Are you sure to delete ' + this.data.name + ' ?')) {
      this.dataService.deleteData(this.data.id).subscribe(() => {
        this.location.back();
      });
    }
  }
}
