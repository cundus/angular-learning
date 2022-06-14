import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IData } from './models/data.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '0123456789',
        createdAt: '2020-01-01',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        phone: '0123456789',
        createdAt: '2021-01-01',
      },
      {
        id: 3,
        name: 'Jack Doe',
        email: 'jackdoe@gmail.com',
        phone: '0123456789',
        createdAt: '2022-01-01',
      },
      {
        id: 4,
        name: 'Jill Doe',
        email: 'jill@mail.com',
        phone: '0123456789',
        createdAt: '2023-01-01',
      },
    ];
    return { data };
  }

  genId(listData: IData[]): number {
    return listData.length > 0
      ? Math.max(...listData.map((hero) => hero.id)) + 1
      : 11;
  }
}
