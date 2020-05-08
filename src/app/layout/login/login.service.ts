import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginBackendService } from './login-backend.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private token$: BehaviorSubject<string>;

    constructor(private backendService: LoginBackendService,
                private router: Router) {
        this.token$ = new BehaviorSubject<string>(null);

      }

    // todo fetch actual values from user inputs, this is a temporary workaround to be able to log in
    loadToken() {
        this.backendService.getToken('8d78281694597960adbbfa53723e6587', '5EA69128B1BD67.52508310', 'Maximilian Both')
            .subscribe((result) => {
                this.setToken(result.token);
                this.router.navigate(['/search']);
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
}
