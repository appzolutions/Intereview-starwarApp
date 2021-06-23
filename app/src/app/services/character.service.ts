import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }
  loadDefaultFeed() {
    return new Array(3);
  }
}
