import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBaseUrl, httpPostOptions } from '../../shared/constants';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from '../../shared/handleError';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginBackendService {

    constructor(private http: HttpClient) { }

    getToken(apikey: any, userkey: any, username: any): Observable<any> {
      const item = {
        apikey,
        userkey,
        username
      };

      return this.http.post<any>(`${apiBaseUrl}/login`, item, httpPostOptions)
          .pipe(
              tap(() => console.log(`token requested`)),
              catchError(handleError<any>('getToken', null))
          );
    }
}
