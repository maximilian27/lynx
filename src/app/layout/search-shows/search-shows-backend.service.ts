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


    getShowsList(searchValue: number): Observable<any> {
        return this.http.get<any>(`${apiBaseUrl}/search/series?name=${searchValue}`)
            .pipe(
                tap(_ => console.log('fetched shows')),
                catchError(handleError<any>('getShowsList', {data: []}))
            );
    }
}
