import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchShowsService } from '../search-shows/search-shows.service';
import { ShowEpisodesBackendService } from './show-episodes-backend.service';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class ShowEpisodesService {
    private episodesList$: BehaviorSubject<Episode[]>;

    constructor(private searchShowsService: SearchShowsService,
                private backendService: ShowEpisodesBackendService) {
        this.episodesList$ = new BehaviorSubject<any>(null);

    }

    loadEpisodes(season: number | string, id: number) {

      this.backendService.getEpisodes(id, season)
          .subscribe((result) => {
            this.setEpisodes(result.data);
          });
    }

    setEpisodes(value: Episode[]) {
      this.episodesList$.next(value);
    }

    get episodesList(): Observable<Episode[]> {
        return this.episodesList$.asObservable();
    }
}
