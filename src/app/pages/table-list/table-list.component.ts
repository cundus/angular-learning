import { Component, OnInit } from '@angular/core';
import { LISTDATA } from 'src/app/data/data-list';
import { IData } from 'src/app/models/data.model';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'name',
    'email',
    'phone',
    'createdAt',
    'action',
  ];
  listData: IData[] = [];

  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit(): void {
    this.getDatas();
  }

  getDatas(): void {
    this.dataService.getDatas().subscribe((data) => {
      // console.log(data);

      this.listData = data;
    });
  }
}
