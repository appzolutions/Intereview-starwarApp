import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as Environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private api_url = Environment.endpoint;
  constructor(private http: HttpClient) { }

  // return defaul page 1 
  loadDefaultFeed() {
    return this.http.get(this.api_url)
    .pipe(map(response => {
        return response;
    }));
  }
  // request a charactor by passing it's id
  loadSingleCharactor(id) {
    return this.http.get(this.api_url+ id)
    .pipe(map(response => {
        return response;
    }));
  }
}
