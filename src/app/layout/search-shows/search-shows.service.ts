import { Injectable } from '@angular/core';
import { SearchShowsBackendService } from './search-shows-backend.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchShowsService {
    private showsList$: BehaviorSubject<any>;

    constructor( private backendService: SearchShowsBackendService) {
        this.showsList$ = new BehaviorSubject<any>(null);

    }

    searchShows(searchValue: any) {
        this.backendService.getShowsList(searchValue)
            .subscribe((result) => {
              this.setShowList(result.data);
            });
    }

    setShowList(value: any) {
      this.showsList$.next(value);
    }

    get showsList(): Observable<any> {
      return this.showsList$.asObservable();
    }
}
