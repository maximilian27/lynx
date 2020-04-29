import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../../shared/constants';
import { catchError, tap} from 'rxjs/operators';
import { handleError } from '../../shared/handleError';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsBackendService {

  constructor(private http: HttpClient) { }

  getDetails(id: number,): Observable<any> {
      return this.http.get<any>(`${apiBaseUrl}/series/${id}`)
          .pipe(
              tap(_ => console.log('fetched details')),
              catchError(handleError<any>('getDetails', {data: []}))
          );
  }

    getSeasons(id: number): Observable<any> {
        return this.http.get<any>(`${apiBaseUrl}/series/${id}/episodes/summary`)
            .pipe(
                tap(_ => console.log('fetched seasons')),
                catchError(handleError<any>('getSeasons', {data: []}))
            );
    }
}
