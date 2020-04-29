import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../../shared/constants';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from '../../shared/handleError';
import { HttpClient } from '@angular/common/http';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class ShowEpisodesBackendService {

  constructor(private http: HttpClient) { }

  getEpisodes(id: number, season: number | string): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${apiBaseUrl}/series/${id}/episodes/query?airedSeason=${season}`)
        .pipe(
            tap(_ => console.log('fetched seasons')),
            catchError(handleError<any>('getSeasons', {data: []}))
        );
  }
}
