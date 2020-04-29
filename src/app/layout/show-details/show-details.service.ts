import { Injectable } from '@angular/core';
import { SearchShowsService } from '../search-shows/search-shows.service';
import { HttpHeaders } from '@angular/common/http';
import { ShowDetailsBackendService } from './show-details-backend.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {
    private details$: BehaviorSubject<any>;
    private seasonsList$: BehaviorSubject<any>;
    private episodesList$: BehaviorSubject<any>;

    constructor(private searchShowsService: SearchShowsService,
                private backendService: ShowDetailsBackendService) {
        this.details$ = new BehaviorSubject<any>(null);
        this.seasonsList$ = new BehaviorSubject<any>(null);
    }

    loadDetails(id: number) {
        // alert(id + this.searchShowsService.token);
        const httpOptions = {
            headers: new HttpHeaders(
              {
                Authorization: `Bearer ${this.searchShowsService.token}`
            })
        };

        this.backendService.getDetails(id, httpOptions)
            .subscribe((result) => {
                this.setDetails(result.data);
            });
    }

    setDetails(value: any) {
        this.details$.next(value);
    }

    get details(): Observable<any> {
        return this.details$.asObservable();
    }

    loadSeasons(id: number) {
        // alert(id + this.searchShowsService.token);
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: `Bearer ${this.searchShowsService.token}`
                })
        };

        this.backendService.getSeasons(id, httpOptions)
            .subscribe((result) => {
                // this.setDetails(result.data);
                this.setSeasons(result.data);
            });
    }

    setSeasons(value: any) {
        this.seasonsList$.next(value);
    }

    get seasonsList(): Observable<any> {
        return this.seasonsList$.asObservable();
    }


}
