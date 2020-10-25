import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly URL = 'http://acnhapi.com/v1/fish';

  constructor(private http: HttpClient) { }

  resolveItems(): Observable<any> {
    console.log( 'Request is sent!' );
    return this.http.get(this.URL);
  }
}
