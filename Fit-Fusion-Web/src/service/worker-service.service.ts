import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worler } from 'src/model/Worker';
import { HttpClient } from '@angular/common/http';
import { Balance } from 'src/model/Balance';

@Injectable({
  providedIn: 'root',
})
export class WorkerServiceService {
  constructor(private http: HttpClient) {}

  fetchWorkers(): Observable<Worler[]> {
    return this.http.get<Worler[]>(`http://localhost:45162/api/Worker`);
  }

  fetchBalance(): Observable<Balance[]> {
    return this.http.get<Balance[]>(`http://localhost:45162/api/Balance`);
  }
}
