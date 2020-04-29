import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchShowsService } from '../search-shows/search-shows.service';
import { ShowEpisodesBackendService } from './show-episodes-backend.service';

@Injectable({
  providedIn: 'root'
})
export class ShowEpisodesService {
    private episodesList$: BehaviorSubject<any>;

    constructor(private searchShowsService: SearchShowsService,
                private backendService: ShowEpisodesBackendService) {
        this.episodesList$ = new BehaviorSubject<any>(null);

    }

    loadEpisodes(season: number | string, id: number) {
      // const httpOptions = {
      //   headers: new HttpHeaders(
      //       {
      //         Authorization: `Bearer ${this.searchShowsService.token}`
      //       })
      // };

      this.backendService.getEpisodes(id, season)
          .subscribe((result) => {
            console.log('episodes', result.data);
            this.setEpisodes(result.data);
          });
    }

    setEpisodes(value: any) {
      this.episodesList$.next(value);
    }

    get episodesList(): Observable<any> {
        return this.episodesList$.asObservable();
    }
    }
