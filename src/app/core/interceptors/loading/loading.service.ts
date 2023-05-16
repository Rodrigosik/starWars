import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class LoadingService {
  private loading$: Subject<boolean> = new Subject<boolean>();
  loading: boolean;

  constructor() {
    this.loading = false;
  }

  changeLoading(loading: boolean) {
    this.loading = loading;
    this.loading$.next(this.loading);
  }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
