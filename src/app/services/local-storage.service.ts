import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    localStorageKey = 'angular10-starter-app';

    constructor() { }

    /**
     * 
     * @returns Observable<any>
     */
    public getCache(): Observable<any> {
        console.log('cachedData', localStorage.getItem(this.localStorageKey));
        return of(JSON.parse(localStorage.getItem(this.localStorageKey)));
    }

    /**
     * Saves the data into local storage.
     * It returns an observable to simulate an asynchronous response.
     * @param data any
     * @returns Observable<any>
     */
    public setCache(data) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        // console.log(JSON.stringify(data));
        return of(data);
    }

    public isCacheSet(): Observable<boolean> {
        return of(localStorage.getItem(this.localStorageKey) === null);
    }

    public emptyCache() {
        localStorage.setItem(this.localStorageKey, null);
    }
}
