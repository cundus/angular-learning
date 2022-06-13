import { Injectable } from '@angular/core';
import { IData } from './models/data.model';
import { LISTDATA } from '../app/data/data-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDatas(): IData[] {
    return LISTDATA;
  }
}
