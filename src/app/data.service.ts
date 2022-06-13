import { Injectable } from '@angular/core';
import { IData } from './models/data.model';
import { LISTDATA } from '../app/data/data-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDatas(): Observable<IData[]> {
    const data = of(LISTDATA);
    return data;
  }

  setDatas(data: IData): void {
    LISTDATA.push(data);
  }

  updateDatas(data: IData): void {
    const index = LISTDATA.findIndex((item) => item.id === data.id);
    LISTDATA[index] = data;
  }

  deleteDatas(data: IData): void {
    const index = LISTDATA.findIndex((item) => item.id === data.id);
    LISTDATA.splice(index, 1);
  }
}
