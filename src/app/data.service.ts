import { Injectable } from '@angular/core';
import { IData } from './models/data.model';
import { LISTDATA } from '../app/data/data-list';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'api/data';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  dataList: IData[] = [];

  constructor(private http: HttpClient) {}

  getDatas(): Observable<IData[]> {
    return this.http.get<IData[]>(this.dataUrl).pipe(
      tap((listData: IData[]) => {
        // console.log(listData);
        this.dataList = listData;
      }),
      catchError(this.handleError<IData[]>('getDatas', []))
    );
  }

  getDataById(id: number): Observable<IData> {
    const url = `${this.dataUrl}/${id}`;
    return this.http
      .get<IData>(url)
      .pipe(catchError(this.handleError<IData>('getDataById')));
  }

  addData(data: IData): Observable<IData> {
    return this.http.post<IData>(this.dataUrl, data, this.httpOptions).pipe(
      tap((newData: IData) => {
        console.log(`added data with id=${newData.id}`);
        this.saveToLocalStorage(newData, 'add');
      }),
      catchError(this.handleError<IData>('addData'))
    );
  }

  updateData(data: IData): Observable<any> {
    return this.http.put(this.dataUrl, data, this.httpOptions).pipe(
      tap((_) => this.saveToLocalStorage(data, 'update')),
      catchError(this.handleError<any>('updateData'))
    );
  }

  deleteData(id: number): Observable<IData> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete<IData>(url, this.httpOptions).pipe(
      tap((_) => this.saveToLocalStorage(id, 'delete')),
      catchError(this.handleError<IData>('deleteData'))
    );
  }

  saveToLocalStorage(data: any, type: string = 'add') {
    let dataToSave = this.dataList;
    switch (type) {
      case 'add':
        dataToSave.push(data);
        break;
      case 'update':
        dataToSave = dataToSave.map((item) => {
          if (item.id === data.id) {
            return data;
          }
          return item;
        });
        break;
      case 'delete':
        dataToSave = dataToSave.filter((item) => item.id !== data);
        break;
    }

    localStorage.setItem('data', JSON.stringify(dataToSave));
  }
}
