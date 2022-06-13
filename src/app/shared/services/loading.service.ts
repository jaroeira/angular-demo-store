import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  //Loading state
  private _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading = this._isLoading.asObservable();

  //loading url requests
  private loadingMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() {}

  setLoading(url: string, loading: boolean) {
    if (!url) throw new Error('url must be provided to LoadingService');

    if (loading) {
      this.loadingMap.set(url, true);
      this._isLoading.next(true);
    } else {
      this.loadingMap.delete(url);
    }

    if (this.loadingMap.size === 0) {
      this._isLoading.next(false);
    }
  }
}
