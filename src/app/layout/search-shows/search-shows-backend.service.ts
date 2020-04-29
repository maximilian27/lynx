import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { handleError } from '../../shared/handleError';
import { apiBaseUrl, httpPostOptions } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchShowsBackendService {

  constructor(private http: HttpClient) { }

  getToken(apikey: any, userkey: any, username: any): Observable<any> {
      console.log('wokrs?');
      const item = {
        apikey,
        userkey,
        username
      };

      return this.http.post<any>(`${apiBaseUrl}/login`, item, httpPostOptions)
          .pipe(
              tap(() => console.log(`token requested`)),
              catchError(handleError<any>('getToken'))
          );
  }

    getShowsList(searchValue: number): Observable<any> {
        return this.http.get<any>(`${apiBaseUrl}/search/series?name=${searchValue}`)
            .pipe(
                tap(_ => console.log('fetched shows')),
                catchError(handleError<any>('getShowsList', {data: []}))
            );
    }
}
