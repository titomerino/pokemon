import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  internal = new Subject();
  show = false;

  getLoadingStatus(): Observable<any> {
    return this.internal.asObservable();
  }

  activate(): void {
    this.internal.next({show: true});
  }

  inactivate(): void {
    this.internal.next({show: false});
  }
}
