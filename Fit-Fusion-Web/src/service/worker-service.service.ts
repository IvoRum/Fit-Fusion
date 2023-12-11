import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worler } from 'src/model/Worker';

@Injectable({
  providedIn: 'root',
})
export class WorkerServiceService {
  constructor(private http: HttpClient) {}

  fetchWorkers(): Observable<Worler[]> {
    return this.http.get<Worler[]>(`http://localhost:45162/api/Worker`);
  }
}
