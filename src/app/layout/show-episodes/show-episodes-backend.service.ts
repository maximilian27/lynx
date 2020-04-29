import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../../shared/constants';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from '../../shared/handleError';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowEpisodesBackendService {

  constructor(private http: HttpClient) { }

  getEpisodes(id: number, season: number | string, httpOptions: any): Observable<any> {
    return this.http.get<any>(`${apiBaseUrl}/series/${id}/episodes/query?airedSeason=${season}`, httpOptions)
        .pipe(
            tap(_ => console.log('fetched seasons')),
            catchError(handleError<any>('getSeasons', {data: []}))
        );
  }
}
