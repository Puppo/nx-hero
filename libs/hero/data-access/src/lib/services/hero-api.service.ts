import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HeroDTO } from '@flowing/hero/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroApiService {
  constructor(private http: HttpClient) {}

  getHeros(): Observable<HeroDTO[]> {
    return this.http.get<HeroDTO[]>('/api/hero');
  }
}
