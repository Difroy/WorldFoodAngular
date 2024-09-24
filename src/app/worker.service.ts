import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from './model/Worker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/api/worker';

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.url);
  }

  newWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.url, worker);
  }
} 