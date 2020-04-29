import { Injectable } from '@angular/core';
import { SearchShowsBackendService } from './search-shows-backend.service';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchShowsService {
    private token$: BehaviorSubject<string>;
    private showsList$: BehaviorSubject<any>;

    constructor( private backendService: SearchShowsBackendService) {
        this.token$ = new BehaviorSubject<string>(null);
        this.showsList$ = new BehaviorSubject<any>(null);

    }

    // todo login page to get credentials, this is a temporary workaround
    loadToken() {
      this.backendService.getToken('8d78281694597960adbbfa53723e6587', '5EA69128B1BD67.52508310', 'Maximilian Both')
          .subscribe((result) => {
            this.setToken(result.token);
          });
    }

    setToken(token: string) {
     this.token$.next(token);
    }

    get token(): string {
     return this.token$.getValue();
    }

    get _token(): Observable<any> {
        return this.token$.asObservable();
    }

    searchShows(value: any) {

      // const httpOptions = {
      //     headers: new HttpHeaders(
      //       {
      //         Authorization: `Bearer ${this.token}`
      //     })
      // };

      this.backendService.getShowsList(value)
        .subscribe((result) => {
          console.log('tv shows!', result);
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
